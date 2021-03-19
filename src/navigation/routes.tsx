import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeColorProvider } from "../contexts/ThemeColorContext";
import * as React from "react";
import Drawer from "./Drawer";

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={Drawer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
