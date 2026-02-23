import { StyleSheet } from "react-native";

import { Colors, Fonts, Spacing } from "@config/theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: Spacing.screenHorizontal,
    paddingBottom: 16,
    backgroundColor: Colors.headerBackground,
    borderBottomWidth: 1,
    borderBottomColor: Colors.headerBorder,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 30,
    lineHeight: 36,
    color: Colors.textPrimary,
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    lineHeight: 20,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  badgeArea: {
    height: 32,
    marginTop: 8,
    justifyContent: "center",
  },
  badgeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});

export { styles };
