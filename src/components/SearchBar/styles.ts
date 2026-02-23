import { StyleSheet } from "react-native";

import { Colors, Fonts, Spacing } from "@config/theme";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.screenHorizontal,
    marginTop: 16,
    marginBottom: 8,
  },
  wrapper: {
    position: "relative",
    justifyContent: "center",
  },
  searchIcon: {
    position: "absolute",
    left: 14,
    zIndex: 1,
  },
  input: {
    backgroundColor: Colors.surface,
    borderRadius: Spacing.searchBorderRadius,
    paddingLeft: 40,
    paddingRight: 16,
    paddingVertical: 12,
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.textPrimary,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  inputWithClear: {
    paddingRight: 40,
  },
  clearButton: {
    position: "absolute",
    right: 14,
    zIndex: 1,
  },
});

export { styles };
