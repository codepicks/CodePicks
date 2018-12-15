import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import {
  ArticleListScreen,
} from './screens'

export const MainNavigator = createBottomTabNavigator({
  NewsList: {
    screen: createStackNavigator({
      NewsList: {
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
})
