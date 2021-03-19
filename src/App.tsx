import { StatusBar } from "expo-status-bar";
import React from "react";
import {} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./navigation/routes";
import { ThemeColorProvider } from "./contexts/ThemeColorContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#000000" style="light" translucent={true} />
      <ThemeColorProvider>
        <Routes />
      </ThemeColorProvider>
    </SafeAreaProvider>
  );
}
