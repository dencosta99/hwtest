import { StyleSheet } from "react-native";

import { Colors, Spacing } from "@config/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingTop: 56,
    paddingLeft: 16,
    paddingBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContent: {
    paddingTop: 24,
    paddingHorizontal: Spacing.screenHorizontal,
    paddingBottom: 40,
  },
  footer: {
    paddingHorizontal: Spacing.screenHorizontal,
    paddingTop: 24,
    paddingBottom: 32,
  },
});

export { styles };
