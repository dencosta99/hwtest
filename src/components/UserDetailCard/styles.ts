import { StyleSheet } from "react-native";

import { Colors, Fonts, Shadows, Spacing } from "@config/theme";

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: Spacing.detailCardBorderRadius,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: "hidden",
    ...Shadows.card,
  },
  gradientHeader: {
    height: 80,
    width: "100%",
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: -56,
  },
  avatarOuter: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: Colors.surface,
    justifyContent: "center",
    alignItems: "center",
    ...Shadows.card,
  },
  avatarInner: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.primaryBlueLight,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontFamily: Fonts.bold,
    fontSize: 36,
    color: Colors.primaryBlue,
  },
  idBadge: {
    backgroundColor: Colors.surfaceTertiary,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 12,
    alignSelf: "center",
  },
  idText: {
    fontFamily: Fonts.mono,
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: 15,
    color: Colors.textTertiary,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  userName: {
    fontFamily: Fonts.bold,
    fontSize: 30,
    lineHeight: 36,
    color: Colors.textPrimary,
    textAlign: "center",
    marginTop: 8,
    paddingHorizontal: 20,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.surfaceTertiary,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  cardBottom: {
    paddingBottom: 20,
  },
});

export { styles };
