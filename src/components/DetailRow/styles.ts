import { StyleSheet } from "react-native";

import { Colors, Fonts, Spacing } from "@config/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: Colors.surfaceSecondary,
    marginHorizontal: 16,
    borderRadius: Spacing.detailRowBorderRadius,
    marginBottom: 8,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  label: {
    fontFamily: Fonts.bold,
    fontSize: 11,
    lineHeight: 16.5,
    color: Colors.textBlueLabel,
    textTransform: "uppercase",
    letterSpacing: 0.55,
  },
  value: {
    fontFamily: Fonts.semiBold,
    fontSize: 14,
    lineHeight: 20,
    color: Colors.textPrimary,
    marginTop: 2,
  },
});

export { styles };
