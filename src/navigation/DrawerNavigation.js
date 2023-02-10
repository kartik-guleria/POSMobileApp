import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Notifications from "common/screens/Notifications";
import DashBoard from "common/screens/DashBoard";
// import DashBoard from "common/screens/DashBoard";

export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
  };
  return (
    <Drawer.Navigator screenOptions={screenOptions}>
      <Drawer.Screen name="DashBoard" component={DashBoard} /> 
    </Drawer.Navigator>
  );
}
