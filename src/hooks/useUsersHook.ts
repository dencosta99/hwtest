import { useNetInfo } from "@react-native-community/netinfo";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";

import type { User } from "@app-types/user";
import { useDecrypt } from "@hooks/useDecryptHook";
import { fetchEncryptedUsers } from "@services/api/fetchEncryptedUsers";
import { Storage } from "@utils/storage";

const USERS_CACHE_KEY = "cached_users";

type ErrorType = "network" | "api" | "decrypt" | "timeout" | null;

interface UseUsersReturn {
  users: User[] | null;
  isLoading: boolean;
  isError: boolean;
  errorType: ErrorType;
  isOffline: boolean;
  isOfflineWithCache: boolean;
  sync: () => void;
}

const getCachedUsers = (): User[] | null => {
  return Storage.getJSON<User[]>(USERS_CACHE_KEY);
};

const setCachedUsers = (users: User[]): void => {
  Storage.setJSON(USERS_CACHE_KEY, users);
};

const clearCachedUsers = (): void => {
  Storage.remove(USERS_CACHE_KEY);
};

const useUsers = (): UseUsersReturn => {
  const { decrypt } = useDecrypt();
  const queryClient = useQueryClient();
  const netInfo = useNetInfo();
  const isOnline = netInfo.isConnected ?? true;
  const query = useQuery({
    queryKey: ["users"],
    queryFn: async (): Promise<User[]> => {
      const response = await fetchEncryptedUsers();
      const users = await decrypt(
        response.data.encrypted,
        response.data.secretKey,
      );
      setCachedUsers(users);
      return users;
    },
    enabled: isOnline,
    retry: 2,
    gcTime: 0,
    staleTime: 0,
  });

  useEffect(() => {
    if (query.isError && isOnline) {
      clearCachedUsers();
    }
  }, [query.isError, isOnline]);

  const getErrorType = useCallback((): ErrorType => {
    if (!query.error) return null;

    const error = query.error as {
      code?: string;
      message?: string;
      response?: { status: number };
    };

    if (error.code === "ECONNABORTED" || error.message?.includes("timeout")) {
      return "timeout";
    }
    if (error.response?.status) {
      return "api";
    }
    if (
      error.message?.includes("decrypt") ||
      error.message?.includes("Unsupported") ||
      error.message?.includes("authenticate")
    ) {
      return "decrypt";
    }
    return "network";
  }, [query.error]);

  const handleSync = useCallback((): void => {
    queryClient.resetQueries({ queryKey: ["users"] });
    query.refetch();
  }, [queryClient, query]);

  const cachedUsers = getCachedUsers();

  if (!isOnline) {
    return {
      users: cachedUsers,
      isLoading: false,
      isError: !cachedUsers,
      errorType: cachedUsers ? null : "network",
      isOffline: true,
      isOfflineWithCache: cachedUsers !== null,
      sync: handleSync,
    };
  }

  return {
    users: query.data ?? null,
    isLoading: query.isLoading,
    isError: query.isError,
    errorType: getErrorType(),
    isOffline: false,
    isOfflineWithCache: false,
    sync: handleSync,
  };
};

export { useUsers };
