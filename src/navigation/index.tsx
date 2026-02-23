import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import type { RootStackParamList } from "@app-types/navigation";
import { DetailsScreen } from "@screens/Details";
import { HomeScreen } from "@screens/Home";

const Stack = createNativeStackNavigator<RootStackParamList>();

interface NavigationProps {
  onReady?: () => void;
}

const Navigation = ({ onReady }: NavigationProps): React.JSX.Element => {
  return (
    <NavigationContainer onReady={onReady}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Navigation };
