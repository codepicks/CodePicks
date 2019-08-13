import React, { Component } from 'react'
import {
  Share,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import {
  Icon,
} from 'native-base'
import { withNavigation } from 'react-navigation'
import { colors } from '../constants'

class ShareIcon extends Component {
  onPressItem() {
    const { navigation, article } = this.props

    navigation.navigate('BridgeView', {
      article,
    })
  }

  render() {
    const {
      url,
      message,
      title,
      subject,
    } = this.props

    return (
      <TouchableOpacity
        onPress={() => Share.share({
          url,
          message,
          title,
          subject,
        })
          .catch(err => console.log(err))
        }
      >
        <Icon
          type="Entypo"
          name="share-alternative"
          style={styles.shareIcon}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  shareIcon: {
    color: colors.white,
    fontSize: 20,
  },
})

export default withNavigation(ShareIcon)
