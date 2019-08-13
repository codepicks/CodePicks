import React, { Component } from 'react'
import { Icon } from 'native-base'
import { Platform, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

type Props = {
  navigation: any
  article?: any
}

class BackIcon extends Component<Props> {
  onPressItem() {
    const { navigation, article } = this.props

    navigation.navigate('BridgeView', {
      article,
    })
  }

  render() {
    const { navigation } = this.props

    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          flex: 1,
          width: 50,
          paddingTop: Platform.select({
            ios: 8,
            android: 13,
          }),
          paddingRight: 20,
        }}
      >
        {/**
        // @ts-ignore Typeには size 無いらしいけど、ちゃんと影響を確認してから消す */}
        <Icon
          name={Platform.select({
            ios: 'ios-arrow-back',
            android: 'md-arrow-back',
          })}
          size={20}
          style={{
            textAlign: 'center',
            color: '#FFF',
          }}
        />
      </TouchableOpacity>
    )
  }
}

export default withNavigation(BackIcon)
