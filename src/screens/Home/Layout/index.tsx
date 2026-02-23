import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";

import type { User } from "@app-types/user";
import { EmptyState } from "@components/EmptyState";
import { ErrorState } from "@components/ErrorState";
import { HomeHeader } from "@components/HomeHeader";
import { SearchBar } from "@components/SearchBar";
import { SkeletonLoader } from "@components/SkeletonLoader";
import { UserCard } from "@components/UserCard";
import { Colors } from "@config/theme";

import { styles } from "./styles";

interface HomeLayoutProps {
  users: User[] | null;
  hasUsers: boolean;
  isLoading: boolean;
  isError: boolean;
  errorType: "network" | "api" | "decrypt" | "timeout" | null;
  isOffline: boolean;
  isOfflineWithCache: boolean;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSync: () => void;
  onUserPress: (user: User) => void;
}

const SKELETON_ITEMS = [1, 2, 3, 4, 5, 6];

const ITEM_HEIGHT = 94;

const keyExtractor = (item: User): string => String(item.id);

const getItemLayout = (
  _: unknown,
  index: number,
): { length: number; offset: number; index: number } => ({
  length: ITEM_HEIGHT + 16,
  offset: (ITEM_HEIGHT + 16) * index,
  index,
});

const SkeletonList = (): React.JSX.Element => (
  <View style={styles.skeletonList}>
    {SKELETON_ITEMS.map((item) => (
      <SkeletonLoader key={item} />
    ))}
  </View>
);

const SearchEmptyState = ({
  query,
}: {
  query: string;
}): React.JSX.Element => (
  <View style={styles.searchEmpty}>
    <Ionicons
      name="search-outline"
      size={40}
      color={Colors.textTertiary}
    />
    <Text style={styles.searchEmptyText}>
      No results for &quot;{query}&quot;
    </Text>
  </View>
);

const HomeLayout = ({
  users,
  hasUsers,
  isLoading,
  isError,
  errorType,
  isOffline,
  isOfflineWithCache,
  searchQuery,
  onSearchChange,
  onSync,
  onUserPress,
}: HomeLayoutProps): React.JSX.Element => {
  const header = (
    <HomeHeader
      userCount={users?.length ?? null}
      isLoading={isLoading}
      isOffline={isOffline}
      isOfflineWithCache={isOfflineWithCache}
      onSync={onSync}
    />
  );

  const renderItem = ({ item }: { item: User }): React.JSX.Element => (
    <UserCard
      name={item.nome}
      email={item.email}
      phone={String(item.telefone)}
      onPress={() => onUserPress(item)}
    />
  );

  if (isLoading && !users) {
    return (
      <View style={styles.container}>
        {header}
        <SearchBar value={searchQuery} onChangeText={onSearchChange} />
        <SkeletonList />
      </View>
    );
  }

  if (isError && !users) {
    return (
      <View style={styles.container}>
        {header}
        <ErrorState errorType={errorType ?? "network"} />
      </View>
    );
  }

  if (!hasUsers) {
    return (
      <View style={styles.container}>
        {header}
        <EmptyState />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {header}
      <SearchBar value={searchQuery} onChangeText={onSearchChange} />
      <FlatList
        data={users ?? []}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<SearchEmptyState query={searchQuery} />}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={onSync}
            tintColor={Colors.primaryBlue}
          />
        }
      />
    </View>
  );
};

export { HomeLayout };
