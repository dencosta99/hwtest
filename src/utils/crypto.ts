import { Buffer } from "buffer";

import QuickCrypto from "react-native-quick-crypto";

class Crypto {
  static decryptAES256GCM(
    encryptedHex: string,
    ivHex: string,
    authTagHex: string,
    keyHex: string,
  ): string {
    const keyBuffer = Buffer.from(keyHex, "hex");
    const ivBuffer = Buffer.from(ivHex, "hex");
    const authTagBuffer = Buffer.from(authTagHex, "hex");
    const encryptedBuffer = Buffer.from(encryptedHex, "hex");

    const decipher = QuickCrypto.createDecipheriv(
      "aes-256-gcm",
      keyBuffer as never,
      ivBuffer as never,
    );
    decipher.setAuthTag(authTagBuffer as never);

    const updated = decipher.update(encryptedBuffer as never);
    const finalized = decipher.final();
    const decrypted = Buffer.concat([
      Buffer.from(updated),
      Buffer.from(finalized),
    ]);

    return decrypted.toString("utf8");
  }
}

export { Crypto };
