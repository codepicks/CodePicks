import React, { Component } from 'react'
import { Text, StyleSheet, Alert } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { TWLoginButton } from 'react-native-simple-twitter'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { authRegister } from '../actions'
import { colors } from '../constants'

type Props = { navigation: any; authRegister: any; auth: any }

class TwitterLoginButton extends Component<Props> {
  onSuccess = user => {
    this.props.authRegister(user)

    Alert.alert('Success', 'ログインに成功しました。Pickできます。', [
      {
        text: 'OK',
        onPress: () => {
          // redirect?
        },
      },
    ])
  }

  render() {
    const { auth } = this.props

    if (auth.token) return null

    return (
      <TWLoginButton style={styles.container} onSuccess={this.onSuccess}>
        <Entypo name="twitter" style={styles.icon} />
        <Text style={styles.text}>Twitterでログインする</Text>
      </TWLoginButton>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: colors.twitter,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
  },
  icon: {
    color: colors.white,
    fontSize: 16,
    marginRight: 10,
  },
})

const StateToProps = ({ auth }) => {
  return {
    auth,
  }
}

export default connect(
  StateToProps,
  {
    authRegister,
  },
)(withNavigation(TwitterLoginButton))
