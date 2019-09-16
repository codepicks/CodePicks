import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { TabBarIcon } from "../components";
import {
  WebViewScreen,
  BridgeViewScreen,
  ArticleListScreen,
  MyPicksScreen,
  MenuScreen
} from "../screens";
import {
  WebViewNavigationOptions,
  BridgeViewNavigationOptions
} from "../navigationOptions";
import { colors } from "../constants";
import { getCurrentRouteName } from "../utils";

const sharedRoutes = {
  WebView: {
    screen: WebViewScreen,
    navigationOptions: ({ navigation }) => WebViewNavigationOptions(navigation)
  },
  BridgeView: {
    screen: BridgeViewScreen,
    navigationOptions: ({ navigation }) =>
      BridgeViewNavigationOptions(navigation)
  }
};

const ArticleList = {
  screen: createStackNavigator({
    ArticleList: {
      screen: ArticleListScreen,
      navigationOptions: {
        header: null
      }
    },
    ...sharedRoutes
  }),
  navigationOptions: ({ navigation }) => ({
    title: "エントリー",
    tabBarIcon: ({ focused }) => {
      return (
        <TabBarIcon focused={focused} type="FontAwesome" name="newspaper-o" />
      );
    },
    tabBarVisible: getCurrentRouteName(navigation.state) !== "WebView"
  })
};

const MyPicks = {
  screen: createStackNavigator(
    {
      MyPicks: {
        screen: MyPicksScreen
      }
    },
    {
      headerMode: "none"
    }
  ),
  navigationOptions: {
    title: "マイピックス",
    tabBarIcon: ({ focused }) => {
      return (
        <TabBarIcon focused={focused} type="FontAwesome" name="bookmark" />
      );
    }
  }
};

const Menu = {
  screen: createStackNavigator({
    Menu: {
      screen: MenuScreen,
      navigationOptions: {
        headerTitle: "メニュー",
        headerStyle: {
          backgroundColor: colors.primaryBlue
        },
        headerTitleStyle: {
          color: colors.white
        }
      }
    }
  }),
  navigationOptions: ({ navigation }) => ({
    title: "Settings",
    tabBarIcon: ({ focused }) => (
      <TabBarIcon type="Entypo" focused={focused} name="menu" />
    ),
    tabBarVisible: getCurrentRouteName(navigation.state) !== "WebView"
  })
};

export default createBottomTabNavigator({
  ArticleList,
  MyPicks,
  Menu
});
