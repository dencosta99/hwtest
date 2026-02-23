import { StyleSheet } from "react-native";

import { Colors, Shadows } from "@config/theme";

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    padding: 17,
    ...Shadows.card,
  },
  badgePlaceholder: {
    width: 120,
    height: 16,
    borderRadius: 8,
    backgroundColor: Colors.surfaceTertiary,
    opacity: 0.4,
    marginBottom: 12,
  },
  lineLong: {
    width: "90%",
    height: 14,
    borderRadius: 7,
    backgroundColor: Colors.surfaceTertiary,
    marginBottom: 8,
  },
  lineMedium: {
    width: "70%",
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.surfaceTertiary,
    marginBottom: 8,
  },
  lineShort: {
    width: "50%",
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.surfaceTertiary,
  },
});

export { styles };
