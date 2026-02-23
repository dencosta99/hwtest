import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

import { Colors } from "@config/theme";

import { styles } from "./styles";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

const EmptyState = ({
  title = "No data available",
  description = "Your contact list is empty. Tap sync to fetch users.",
}: EmptyStateProps): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons
          name="file-tray-outline"
          size={48}
          color={Colors.primaryBlue}
        />
        <View style={styles.badgeIcon}>
          <Ionicons name="cloud-offline" size={16} color={Colors.surface} />
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export { EmptyState };
