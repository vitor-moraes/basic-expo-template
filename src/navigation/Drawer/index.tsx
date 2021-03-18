import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";

import Home from "../../screens/Home";
import Login from "../../screens/Login";

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
