import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "@/navigations/TabNavigator";
import Toast from "react-native-toast-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
        <Toast />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};

export default App;
