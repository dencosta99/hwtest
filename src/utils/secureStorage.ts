import * as Keychain from "react-native-keychain";

class SecureStorage {
  static async save(key: string, value: string): Promise<void> {
    await Keychain.setGenericPassword(key, value);
  }

  static async get(): Promise<string> {
    const credentials = await Keychain.getGenericPassword();
    if (!credentials) {
      throw new Error("Failed to retrieve secret key from Keychain");
    }
    return credentials.password;
  }

  static async clear(): Promise<void> {
    await Keychain.resetGenericPassword();
  }
}

export { SecureStorage };
