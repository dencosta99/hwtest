import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { Colors } from "@config/theme";

import { styles } from "./styles";

interface PrimaryButtonProps {
  text: string;
  icon?: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}

const PrimaryButton = ({
  text,
  icon,
  onPress,
}: PrimaryButtonProps): React.JSX.Element => (
  <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
    {icon && <Ionicons name={icon} size={20} color={Colors.surface} />}
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export { PrimaryButton };
