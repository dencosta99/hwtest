import React from "react";
import { Text, View } from "react-native";

import { Badge } from "@components/Badge";
import { SyncButton } from "@components/SyncButton";

import { styles } from "./styles";

interface HomeHeaderProps {
  userCount: number | null;
  isLoading: boolean;
  isOffline: boolean;
  isOfflineWithCache: boolean;
  onSync: () => void;
}

const HomeHeader = ({
  userCount,
  isLoading,
  isOffline,
  isOfflineWithCache,
  onSync,
}: HomeHeaderProps): React.JSX.Element => {
  const hasUsers = userCount !== null;

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>Contacts</Text>
        <SyncButton
          onPress={onSync}
          variant={hasUsers ? "white" : "blueLight"}
        />
      </View>
      <View style={styles.badgeArea}>
        {hasUsers && !isOffline && (
          <View style={styles.badgeRow}>
            <Badge
              text={`${userCount} Active Users`}
              showDot
              variant="primary"
            />
          </View>
        )}
        {isOfflineWithCache && hasUsers && (
          <View style={styles.badgeRow}>
            <Badge
              text={`${userCount} Active Users`}
              showDot
              icon="cloud-done-outline"
              variant="primary"
            />
            <Badge text="Offline Mode" icon="wifi" variant="neutral" />
          </View>
        )}
        {!hasUsers && !isLoading && (
          <Text style={styles.subtitle}>Manage Users</Text>
        )}
      </View>
    </View>
  );
};

export { HomeHeader };
