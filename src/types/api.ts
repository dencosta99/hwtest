export interface EncryptedPayload {
  iv: string;
  authTag: string;
  encrypted: string;
}

export interface ApiResponse {
  success: boolean;
  data: {
    encrypted: EncryptedPayload;
    secretKey: string;
    algorithm: string;
  };
}
