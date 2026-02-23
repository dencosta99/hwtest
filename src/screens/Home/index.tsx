import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";

import type { RootStackParamList } from "@app-types/navigation";
import type { User } from "@app-types/user";
import { useUsers } from "@hooks/useUsersHook";

import { HomeLayout } from "./Layout";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: Props): React.JSX.Element => {
  const {
    users,
    isLoading,
    isError,
    errorType,
    isOffline,
    isOfflineWithCache,
    sync,
  } = useUsers();

  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users
    ? users.filter(
        (user) =>
          user.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : null;

  const handleUserPress = useCallback(
    (user: User): void => {
      navigation.navigate("Details", { user });
    },
    [navigation],
  );

  return (
    <HomeLayout
      users={filteredUsers}
      isLoading={isLoading}
      isError={isError}
      errorType={errorType}
      isOffline={isOffline}
      isOfflineWithCache={isOfflineWithCache}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      onSync={sync}
      onUserPress={handleUserPress}
    />
  );
};

export { HomeScreen };
