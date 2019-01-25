import React from 'react'
import {
  Platform,
  StatusBar,
} from 'react-native'
import {
  AppLoading,
  Asset,
  Constants,
} from 'expo'
import { Provider } from 'react-redux'
import twitter from 'react-native-simple-twitter'
import store from './src/store'
import AppNavigator from './src/navigation/AppNavigator'
import Analytics from './src/services/googleAnalytics'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoadingComplete: false,
    }

    Analytics.init(Constants.deviceId)
  }

  loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    twitter.setConsumerKey(Constants.manifest.extra.twitter.consumerKey, Constants.manifest.extra.twitter.consumerKeySecret),
  ])

  handleLoadingError = error => {
    console.warn(error)
  }

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }

  render() {
    const { isLoadingComplete } = this.state
    const { skipLoadingScreen } = this.props

    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      )
    }
    return (
      <Provider store={store}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator
          onNavigationStateChange={(prevState, currentState) => {
            Analytics.screenHit(prevState, currentState)
          }}
        />
      </Provider>
    )
  }
}
