import type { ApiResponse } from "@app-types/api";
import { api } from "@config/api";

const fetchEncryptedUsers = async (): Promise<ApiResponse> => {
  const { data } = await api.get<ApiResponse>("/webhook/data-5dYbrVSlMVJxfmco");
  return data;
};

export { fetchEncryptedUsers };
