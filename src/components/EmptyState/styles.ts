import { StyleSheet } from "react-native";

import { Colors, Fonts, Shadows } from "@config/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  iconContainer: {
    width: 128,
    height: 128,
    borderRadius: 32,
    backgroundColor: Colors.surface,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    ...Shadows.card,
  },
  badgeIcon: {
    position: "absolute",
    top: -6,
    right: -6,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.primaryBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    lineHeight: 25,
    color: Colors.textPrimary,
    textAlign: "center",
    marginBottom: 8,
  },
  description: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    lineHeight: 22.75,
    color: Colors.textSecondary,
    textAlign: "center",
  },
});

export { styles };
