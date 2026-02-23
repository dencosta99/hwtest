import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

import { Colors } from "@config/theme";

import { styles } from "./styles";

type BadgeVariant = "primary" | "neutral";

interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
  showDot?: boolean;
  icon?: keyof typeof Ionicons.glyphMap;
}

const Badge = ({
  text,
  variant = "primary",
  showDot = false,
  icon,
}: BadgeProps): React.JSX.Element => {
  const iconColor =
    variant === "primary" ? Colors.primaryBlue : Colors.textTertiary;

  return (
    <View style={[styles.container, styles[variant]]}>
      {showDot && <View style={[styles.dot, styles[`dot${capitalize(variant)}`]]} />}
      {icon && <Ionicons name={icon} size={12} color={iconColor} />}
      <Text style={[styles.text, styles[`text${capitalize(variant)}`]]}>
        {text}
      </Text>
    </View>
  );
};

const capitalize = (s: string): "Primary" | "Neutral" =>
  (s.charAt(0).toUpperCase() + s.slice(1)) as "Primary" | "Neutral";

export { Badge };
export type { BadgeVariant };
