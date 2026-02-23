import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

import { Colors } from "@config/theme";

import { styles } from "./styles";

type ErrorType = "network" | "api" | "decrypt" | "timeout";

interface ErrorStateProps {
  errorType: ErrorType;
}

const ERROR_MESSAGES: Record<
  ErrorType,
  { title: string; description: string; icon: keyof typeof Ionicons.glyphMap }
> = {
  network: {
    title: "Sem conexão",
    description:
      "Sem conexão com a internet. Conecte-se para carregar os dados.",
    icon: "cloud-offline",
  },
  api: {
    title: "Erro no servidor",
    description: "Erro ao buscar dados. Tente novamente.",
    icon: "server-outline",
  },
  decrypt: {
    title: "Erro de processamento",
    description: "Erro ao processar os dados. Tente sincronizar novamente.",
    icon: "lock-closed-outline",
  },
  timeout: {
    title: "Timeout",
    description: "A conexão demorou demais. Tente novamente.",
    icon: "time-outline",
  },
};

const ErrorState = ({ errorType }: ErrorStateProps): React.JSX.Element => {
  const config = ERROR_MESSAGES[errorType];

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name={config.icon} size={36} color={Colors.primaryBlue} />
        <View style={styles.badgeIcon}>
          <Ionicons name="alert" size={14} color={Colors.surface} />
        </View>
      </View>
      <Text style={styles.title}>{config.title}</Text>
      <Text style={styles.description}>{config.description}</Text>
    </View>
  );
};

export { ErrorState };
