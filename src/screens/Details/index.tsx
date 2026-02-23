import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useMemo } from "react";
import { Share } from "react-native";

import type { RootStackParamList } from "@app-types/navigation";

import { DetailsLayout } from "./Layout";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const getInitials = (name: string): string => {
  const parts = name.trim().split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

const DetailsScreen = ({ route, navigation }: Props): React.JSX.Element => {
  const { user } = route.params;

  const initials = useMemo(() => getInitials(user.nome), [user.nome]);
  const badge = `ID: #${user.id}`;

  const details = useMemo(
    () => [
      { icon: "mail-outline" as const, label: "EMAIL", value: user.email },
      {
        icon: "call-outline" as const,
        label: "PHONE",
        value: String(user.telefone),
      },
    ],
    [user.email, user.telefone],
  );

  const handleBack = useCallback((): void => {
    navigation.goBack();
  }, [navigation]);

  const handleShare = useCallback(async (): Promise<void> => {
    const message = `Name: ${user.nome}\nEmail: ${user.email}\nPhone: ${String(user.telefone)}`;

    await Share.share({
      message,
    });
  }, [user]);

  return (
    <DetailsLayout
      initials={initials}
      badge={badge}
      title={user.nome}
      details={details}
      onBack={handleBack}
      onShare={handleShare}
    />
  );
};

export { DetailsScreen };
