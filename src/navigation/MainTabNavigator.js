import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import LinksScreen from '../screens/LinksScreen'
import MenuScreen from '../screens/MenuScreen'
import { colors } from '../constants'
import { getCurrentRouteName } from '../utils'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
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
  tabBarLabel: 'Links',
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
    tabBarLabel: 'Settings',
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
  HomeStack,
  LinksStack,
  Menu,
})
