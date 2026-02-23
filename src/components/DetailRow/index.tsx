import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

import { Colors } from "@config/theme";

import { styles } from "./styles";

interface DetailRowProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
}

const DetailRow = ({
  icon,
  label,
  value,
}: DetailRowProps): React.JSX.Element => (
  <View style={styles.container}>
    <View style={styles.icon}>
      <Ionicons name={icon} size={18} color={Colors.primaryBlue} />
    </View>
    <View style={styles.content}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  </View>
);

export { DetailRow };
