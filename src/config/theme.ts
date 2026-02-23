import { Platform } from "react-native";

export const Colors = {
  background: "#f6f6f8",
  surface: "#ffffff",
  primaryBlue: "#135bec",
  primaryBlueLight: "rgba(19,91,236,0.1)",
  textPrimary: "#0f172a",
  textSecondary: "#64748b",
  textTertiary: "#94a3b8",
  textBlueLabel: "#4c669a",
  border: "#e5e7eb",
  borderLight: "#f1f5f9",
  surfaceSecondary: "#f9fafb",
  surfaceTertiary: "#f3f4f6",
  gradientStart: "rgba(19,91,236,0.08)",
  gradientEnd: "rgba(19,91,236,0.02)",
  headerBackground: "rgba(246,246,248,0.95)",
  headerBorder: "rgba(226,232,240,0.5)",
} as const;

export const Fonts = {
  regular: "Inter_400Regular",
  medium: "Inter_500Medium",
  semiBold: "Inter_600SemiBold",
  bold: "Inter_700Bold",
  mono: Platform.select({ ios: "Courier New", default: "monospace" }),
} as const;

export const Spacing = {
  screenHorizontal: 24,
  cardPadding: 17,
  cardGap: 16,
  cardBorderRadius: 16,
  detailCardBorderRadius: 24,
  buttonBorderRadius: 28,
  searchBorderRadius: 24,
  detailRowBorderRadius: 28,
} as const;

export const Shadows = {
  card: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  subtle: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
} as const;
