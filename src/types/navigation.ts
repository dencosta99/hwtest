import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { User } from "./user";

export type RootStackParamList = {
  Home: undefined;
  Details: { user: User };
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;
export type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Details"
>;
