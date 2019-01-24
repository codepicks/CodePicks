import React, { Component } from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { authSetToken } from '../actions'
import { navigateWithReset } from '../utils'

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props)
    this.bootstrapAsync()
  }

  bootstrapAsync = async () => {
    const token = await AsyncStorage.getItem('token')
    console.log(token)

    this.props.authSetToken(token)
    navigateWithReset('ArticleList', this.props.navigation)
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}

export default connect(null, {
  authSetToken,
})(AuthLoadingScreen)
