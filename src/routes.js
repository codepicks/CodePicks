import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import {
  ArticleListScreen,
  MyPicksScreen,
  MenuScreen,
  WebViewScreen,
} from './screens'
import { WebViewNavigationOptions } from './navigationOptions'
import { colors } from './config'
import { getCurrentRouteName } from './utils'

const sharedRoutes = {
  WebView: {
    screen: WebViewScreen,
    navigationOptions: ({ navigation }) => WebViewNavigationOptions(navigation)
  },
}

export const MainNavigator = createBottomTabNavigator({
  ArticleList: {
    screen: createStackNavigator({
      ArticleList: {
        screen: ArticleListScreen,
        navigationOptions: {
          header: null
        }
      },
      ...sharedRoutes
    }),
    navigationOptions: navigation => ({
      title: 'エントリー',
      tabBarIcon: ({ tintColor }) => {
        return (
          <Icon
            type="font-awesome"
            name="newspaper-o"
            size={22}
            color={tintColor}
          />
        )
      },
      tabBarVisible: getCurrentRouteName(navigation.state) !== 'WebView'
    }),
  },
  MyPicks: {
    screen: createStackNavigator({
      MyPicks: {
        screen: MyPicksScreen
      }
    }, {
      headerMode: 'none',
    }),
    navigationOptions: {
      title: 'マイピックス',
      tabBarIcon: ({ tintColor }) => {
        return (
          <Icon
            type="font-awesome"
            name="bookmark"
            size={22}
            color={tintColor}
          />
        )
      },
    },
  },
  Menu: {
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
          }
        }
      }
    }),
    navigationOptions: ({ navigation }) => ({
      title: 'メニュー',
      tabBarIcon: ({ tintColor }) => {
        return (
          <Icon
            type="entypo"
            name="menu"
            size={22}
            color={tintColor}
          />
        )
      },
      tabBarVisible: getCurrentRouteName(navigation.state) !== 'WebView'
    }),
  },
})
