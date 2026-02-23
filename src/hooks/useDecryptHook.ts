import { useCallback } from "react";

import type { EncryptedPayload } from "@app-types/api";
import type { User } from "@app-types/user";
import { Crypto } from "@utils/crypto";
import { SecureStorage } from "@utils/secureStorage";

interface UseDecryptReturn {
  decrypt: (payload: EncryptedPayload, secretKey: string) => Promise<User[]>;
}

export const decryptPayload = async (
  payload: EncryptedPayload,
  secretKey: string,
): Promise<User[]> => {
  await SecureStorage.save("secretKey", secretKey);

  try {
    const storedKey = await SecureStorage.get();

    const jsonString = Crypto.decryptAES256GCM(
      payload.encrypted,
      payload.iv,
      payload.authTag,
      storedKey,
    );

    const users: User[] = JSON.parse(jsonString);

    return users;
  } finally {
    await SecureStorage.clear();
  }
};

const useDecrypt = (): UseDecryptReturn => {
  const decrypt = useCallback(
    (payload: EncryptedPayload, secretKey: string): Promise<User[]> =>
      decryptPayload(payload, secretKey),
    [],
  );

  return { decrypt };
};

export { useDecrypt };
