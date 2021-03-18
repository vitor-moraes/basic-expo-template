import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./navigation/routes";
import { ThemeColorProvider } from "./contexts/ThemeColorContext";

// import useCachedResources from './hooks/useCachedResources';

export default function App() {
  // const isLoadingComplete = useCachedResources();

  // if (!isLoadingComplete) {
  //   return null;
  // } else {
  return (
    <ThemeColorProvider>
      <SafeAreaProvider>
        <Routes />
        <StatusBar hidden />
      </SafeAreaProvider>
    </ThemeColorProvider>
  );
  // }
}
