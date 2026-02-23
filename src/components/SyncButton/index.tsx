import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

import { Colors } from "@config/theme";

import { styles } from "./styles";

interface SyncButtonProps {
  onPress: () => void;
  variant?: "white" | "blueLight";
}

const SyncButton = ({
  onPress,
  variant = "white",
}: SyncButtonProps): React.JSX.Element => {
  const iconColor =
    variant === "white" ? Colors.textPrimary : Colors.primaryBlue;

  return (
    <TouchableOpacity
      style={[styles.button, styles[variant]]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons name="sync" size={20} color={iconColor} />
    </TouchableOpacity>
  );
};

export { SyncButton };
