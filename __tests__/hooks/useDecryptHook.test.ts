import { Buffer } from "buffer";

import type { EncryptedPayload } from "@app-types/api";
import type { User } from "@app-types/user";
import { decryptPayload } from "@hooks/useDecryptHook";

const mockSetAuthTag = jest.fn();
const mockUpdate = jest.fn();
const mockFinal = jest.fn();

jest.mock("react-native-quick-crypto", () => ({
  __esModule: true,
  default: {
    createDecipheriv: jest.fn(() => ({
      setAuthTag: mockSetAuthTag,
      update: mockUpdate,
      final: mockFinal,
    })),
  },
}));

const mockSetGenericPassword = jest.fn();
const mockGetGenericPassword = jest.fn();
const mockResetGenericPassword = jest.fn();

jest.mock("react-native-keychain", () => ({
  setGenericPassword: (...args: unknown[]) => mockSetGenericPassword(...args),
  getGenericPassword: () => mockGetGenericPassword(),
  resetGenericPassword: () => mockResetGenericPassword(),
}));

const VALID_SECRET_KEY =
  "d4e1a7b9c2f84f8a6d3e9c1b7a5f0d9c3e7f1a6b9c8d2e4f7a1c6b3e8d9f2a4c";

const VALID_PAYLOAD: EncryptedPayload = {
  iv: "f0089e49ec7e7c7e0e4ac9e8",
  authTag: "e55f103fe34c091b313a11e837a25300",
  encrypted: "abcdef1234567890abcdef1234567890",
};

const VALID_USERS: User[] = [
  {
    row_number: 1,
    id: 1,
    nome: "John Smith",
    email: "johnsmith@email.com",
    telefone: 1234567890,
  },
  {
    row_number: 2,
    id: 2,
    nome: "Jane Doe",
    email: "janedoe@email.com",
    telefone: 9876543210,
  },
];

describe("decryptPayload", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockSetAuthTag.mockImplementation(() => undefined);
    mockUpdate.mockReset();
    mockFinal.mockReset();

    mockSetGenericPassword.mockResolvedValue(true);
    mockGetGenericPassword.mockResolvedValue({
      username: "secretKey",
      password: VALID_SECRET_KEY,
    });
    mockResetGenericPassword.mockResolvedValue(true);

    const jsonBuffer = Buffer.from(JSON.stringify(VALID_USERS));
    mockUpdate.mockReturnValue(jsonBuffer);
    mockFinal.mockReturnValue(Buffer.alloc(0));
  });

  it("returns correct User[] with valid data", async () => {
    const result = await decryptPayload(VALID_PAYLOAD, VALID_SECRET_KEY);

    expect(result).toEqual(VALID_USERS);
    expect(result).toHaveLength(2);
  });

  it("stores secret key in Keychain before decryption", async () => {
    await decryptPayload(VALID_PAYLOAD, VALID_SECRET_KEY);

    expect(mockSetGenericPassword).toHaveBeenCalledWith(
      "secretKey",
      VALID_SECRET_KEY,
    );
  });

  it("retrieves secret key from Keychain for decryption", async () => {
    await decryptPayload(VALID_PAYLOAD, VALID_SECRET_KEY);

    expect(mockGetGenericPassword).toHaveBeenCalled();
  });

  it("removes secret key from Keychain after decryption", async () => {
    await decryptPayload(VALID_PAYLOAD, VALID_SECRET_KEY);

    expect(mockResetGenericPassword).toHaveBeenCalled();
  });

  it("removes secret key from Keychain even when decryption fails", async () => {
    mockUpdate.mockImplementation(() => {
      throw new Error("Decryption failed");
    });

    await expect(
      decryptPayload(VALID_PAYLOAD, VALID_SECRET_KEY),
    ).rejects.toThrow();

    expect(mockResetGenericPassword).toHaveBeenCalled();
  });

  it("throws error when IV is invalid", async () => {
    mockUpdate.mockImplementation(() => {
      throw new Error("Invalid IV length");
    });

    const invalidPayload = { ...VALID_PAYLOAD, iv: "" };

    await expect(
      decryptPayload(invalidPayload, VALID_SECRET_KEY),
    ).rejects.toThrow();
    expect(mockResetGenericPassword).toHaveBeenCalled();
  });

  it("throws error when authTag is corrupted", async () => {
    mockSetAuthTag.mockImplementation(() => {
      throw new Error("Unsupported state or unable to authenticate data");
    });

    const corruptedPayload = { ...VALID_PAYLOAD, authTag: "corrupted" };

    await expect(
      decryptPayload(corruptedPayload, VALID_SECRET_KEY),
    ).rejects.toThrow("Unsupported state or unable to authenticate data");
    expect(mockResetGenericPassword).toHaveBeenCalled();
  });

  it("throws error when secretKey is incorrect", async () => {
    mockFinal.mockImplementation(() => {
      throw new Error("Unsupported state or unable to authenticate data");
    });

    await expect(
      decryptPayload(VALID_PAYLOAD, "wrong_key_hex"),
    ).rejects.toThrow();
    expect(mockResetGenericPassword).toHaveBeenCalled();
  });

  it("throws error when encrypted data is empty", async () => {
    mockUpdate.mockReturnValue(Buffer.from(""));
    mockFinal.mockReturnValue(Buffer.alloc(0));

    const emptyPayload = { ...VALID_PAYLOAD, encrypted: "" };

    await expect(
      decryptPayload(emptyPayload, VALID_SECRET_KEY),
    ).rejects.toThrow();
    expect(mockResetGenericPassword).toHaveBeenCalled();
  });

  it("throws error when decrypted data is malformed JSON", async () => {
    mockUpdate.mockReturnValue(Buffer.from("not valid json {{{"));

    await expect(
      decryptPayload(VALID_PAYLOAD, VALID_SECRET_KEY),
    ).rejects.toThrow();
    expect(mockResetGenericPassword).toHaveBeenCalled();
  });

  it("returns data with correct JSON structure after decryption", async () => {
    const result = await decryptPayload(VALID_PAYLOAD, VALID_SECRET_KEY);

    result.forEach((user) => {
      expect(typeof user.row_number).toBe("number");
      expect(typeof user.id).toBe("number");
      expect(typeof user.nome).toBe("string");
      expect(typeof user.email).toBe("string");
      expect(typeof user.telefone).toBe("number");
    });
  });

  it("throws error when Keychain fails to retrieve credentials", async () => {
    mockGetGenericPassword.mockResolvedValue(false);

    await expect(
      decryptPayload(VALID_PAYLOAD, VALID_SECRET_KEY),
    ).rejects.toThrow("Failed to retrieve secret key from Keychain");
    expect(mockResetGenericPassword).toHaveBeenCalled();
  });
});
