// eslint-disable-next-line
import React from 'react'
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import MainTabNavigator from "./MainTabNavigator";

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Main: MainTabNavigator
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
