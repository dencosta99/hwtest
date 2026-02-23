import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

import { PrimaryButton } from "@components/PrimaryButton";
import { UserDetailCard } from "@components/UserDetailCard";
import { Colors } from "@config/theme";

import { styles } from "./styles";

interface DetailsLayoutProps {
  initials: string;
  badge: string;
  title: string;
  details: { icon: keyof typeof Ionicons.glyphMap; label: string; value: string }[];
  onBack: () => void;
  onShare: () => void;
}

const DetailsLayout = ({
  initials,
  badge,
  title,
  details,
  onBack,
  onShare,
}: DetailsLayoutProps): React.JSX.Element => (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={onBack}
        activeOpacity={0.7}
      >
        <Ionicons name="chevron-back" size={20} color={Colors.textPrimary} />
      </TouchableOpacity>
    </View>

    <ScrollView contentContainerStyle={styles.scrollContent}>
      <UserDetailCard
        initials={initials}
        badge={badge}
        title={title}
        details={details}
      />
    </ScrollView>

    <View style={styles.footer}>
      <PrimaryButton
        text="Share Contact"
        icon="share-outline"
        onPress={onShare}
      />
    </View>
  </View>
);

export { DetailsLayout };
