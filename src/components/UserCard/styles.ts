import { StyleSheet } from "react-native";

import { Colors, Fonts, Spacing, Shadows } from "@config/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderRadius: Spacing.cardBorderRadius,
    padding: Spacing.cardPadding,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    ...Shadows.card,
  },
  name: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    lineHeight: 24,
    color: Colors.textPrimary,
  },
  email: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    lineHeight: 20,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  phone: {
    fontFamily: Fonts.medium,
    fontSize: 12,
    lineHeight: 16,
    color: Colors.textTertiary,
    marginTop: 2,
  },
});

export { styles };
