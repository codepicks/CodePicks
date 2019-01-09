import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import LinksScreen from '../screens/LinksScreen'
import MenuScreen from '../screens/MenuScreen'
import WebViewScreen from '../screens/WebViewScreen'
import ArticleListScreen from '../screens/ArticleListScreen'
import { WebViewNavigationOptions } from '../navigationOptions'
import { colors } from '../constants'
import { getCurrentRouteName } from '../utils'

const sharedRoutes = {
  WebView: {
    screen: WebViewScreen,
    navigationOptions: ({ navigation }) => WebViewNavigationOptions(navigation),
  },
}

const ArticleList = {
  screen: createStackNavigator({
    ArticleList: {
      screen: ArticleListScreen,
      navigationOptions: {
        header: null,
      },
    },
    ...sharedRoutes,
  }),
  navigationOptions: navigation => ({
    title: 'エントリー',
    tabBarIcon: ({ focused }) => {
      return (
        <TabBarIcon
          focused={focused}
          type="FontAwesome"
          name="newspaper-o"
        />
      )
    },
    tabBarVisible: getCurrentRouteName(navigation.state) !== 'WebView',
  }),
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
})

HomeStack.navigationOptions = {
  title: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

const LinksStack = createStackNavigator({
  Links: LinksScreen,
})

LinksStack.navigationOptions = {
  title: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
}

const Menu = {
  screen: createStackNavigator({
    Menu: {
      screen: MenuScreen,
      navigationOptions: {
        headerTitle: 'メニュー',
        headerStyle: {
          backgroundColor: colors.primaryBlue,
        },
        headerTitleStyle: {
          color: colors.white,
        },
      },
    },
  }),
  navigationOptions: ({ navigation }) => ({
    title: 'Settings',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
      />
    ),
    tabBarVisible: getCurrentRouteName(navigation.state) !== 'WebView'
  }),
}

export default createBottomTabNavigator({
  ArticleList,
  HomeStack,
  LinksStack,
  Menu,
})
