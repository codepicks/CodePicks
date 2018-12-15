import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import {
  ArticleListScreen,
  MyPicksScreen,
  MenuScreen,
} from './screens'
import { colors } from './config'
import { getCurrentRouteName } from './utils'

export const MainNavigator = createBottomTabNavigator({
  ArticleList: {
    screen: createStackNavigator({
      ArticleList: {
        screen: ArticleListScreen,
        navigationOptions: {
          header: null
        }
      },
    }),
    navigationOptions: () => ({
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
