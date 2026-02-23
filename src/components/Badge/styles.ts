import { StyleSheet } from "react-native";

import { Colors, Fonts } from "@config/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    gap: 6,
  },
  primary: {
    backgroundColor: Colors.primaryBlueLight,
  },
  neutral: {
    backgroundColor: Colors.surfaceTertiary,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  dotPrimary: {
    backgroundColor: Colors.primaryBlue,
  },
  dotNeutral: {
    backgroundColor: Colors.textTertiary,
  },
  text: {
    fontFamily: Fonts.semiBold,
    fontSize: 12,
    lineHeight: 16,
  },
  textPrimary: {
    color: Colors.primaryBlue,
  },
  textNeutral: {
    color: Colors.textTertiary,
  },
});

export { styles };
