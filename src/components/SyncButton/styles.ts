import { StyleSheet } from "react-native";

import { Colors, Shadows } from "@config/theme";

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
  },
  white: {
    backgroundColor: Colors.surface,
    ...Shadows.card,
  },
  blueLight: {
    backgroundColor: Colors.primaryBlueLight,
  },
});

export { styles };
