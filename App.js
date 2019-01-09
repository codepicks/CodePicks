import React from 'react'
import {
  Platform, StatusBar,
} from 'react-native'
import {
  AppLoading, Asset, Font, Icon,
} from 'expo'
import { Provider } from 'react-redux'
import store from './src/store'
import AppNavigator from './src/navigation/AppNavigator'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }

  loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      require('./src/assets/images/robot-dev.png'),
      require('./src/assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Icon.Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free
      // to remove this if you are not using it in your app
      'space-mono': require('./src/assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ])

  handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
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
        <AppNavigator />
      </Provider>
    )
  }
}
