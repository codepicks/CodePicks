import React, { Component } from 'react'
import { LayoutAnimation } from 'react-native'
import { Provider } from 'react-redux'
import { MainNavigator } from './src/routes'
import store from './src/store'
import { logScreenView } from './src/services'

console.disableYellowBox = true

type Props = {}
export default class App extends Component<Props> {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut()
  }

  render() {
    return (
      <Provider store={store}>
        <MainNavigator
          onNavigationStateChange={(prevState, currentState) => {
            logScreenView(prevState, currentState)
          }}
        />
      </Provider>
    )
  }
}
