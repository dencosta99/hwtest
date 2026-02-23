import { StyleSheet } from "react-native";

import { Colors, Fonts } from "@config/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primaryBlueLight,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  badgeIcon: {
    position: "absolute",
    top: -4,
    right: -4,
    width: 28,
    height: 28,
    borderRadius: 14,
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
