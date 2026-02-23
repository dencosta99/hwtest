import { StyleSheet } from "react-native";

import { Colors, Spacing } from "@config/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContent: {
    paddingHorizontal: Spacing.screenHorizontal,
    paddingTop: 8,
    paddingBottom: 24,
    gap: Spacing.cardGap,
  },
  skeletonList: {
    paddingHorizontal: Spacing.screenHorizontal,
    paddingTop: 8,
    gap: Spacing.cardGap,
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { styles };
