import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

import { DetailRow } from "@components/DetailRow";
import { Colors } from "@config/theme";

import { styles } from "./styles";

interface DetailItem {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
}

interface UserDetailCardProps {
  initials: string;
  badge: string;
  title: string;
  details: DetailItem[];
}

const UserDetailCard = ({
  initials,
  badge,
  title,
  details,
}: UserDetailCardProps): React.JSX.Element => (
  <View style={styles.card}>
    <LinearGradient
      colors={[Colors.gradientStart, Colors.gradientEnd]}
      style={styles.gradientHeader}
    />

    <View style={styles.avatarContainer}>
      <View style={styles.avatarOuter}>
        <View style={styles.avatarInner}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>
      </View>
    </View>

    <View style={styles.idBadge}>
      <Text style={styles.idText}>{badge}</Text>
    </View>

    <Text style={styles.userName}>{title}</Text>

    <View style={styles.divider} />

    {details.map((detail) => (
      <DetailRow
        key={detail.label}
        icon={detail.icon}
        label={detail.label}
        value={detail.value}
      />
    ))}

    <View style={styles.cardBottom} />
  </View>
);

export { UserDetailCard };
