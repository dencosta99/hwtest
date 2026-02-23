import { StyleSheet } from "react-native";

import { Colors, Fonts, Spacing } from "@config/theme";

const styles = StyleSheet.create({
  button: {
    height: 56,
    backgroundColor: Colors.primaryBlue,
    borderRadius: Spacing.buttonBorderRadius,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.primaryBlue,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 8,
  },
  text: {
    fontFamily: Fonts.medium,
    fontSize: 17,
    lineHeight: 25.5,
    color: Colors.surface,
    marginLeft: 8,
  },
});

export { styles };
