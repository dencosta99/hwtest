import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { QueryClientProvider } from "@tanstack/react-query";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";

import { queryClient } from "@config/queryClient";
import { Navigation } from "@navigation/index";

SplashScreen.preventAutoHideAsync();

const App = (): React.JSX.Element | null => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const onLayoutReady = useCallback(async (): Promise<void> => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation onReady={onLayoutReady} />
    </QueryClientProvider>
  );
};

export default App;
