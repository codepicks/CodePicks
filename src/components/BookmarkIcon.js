import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { colors } from '../constants'

export default class ArticleCard extends Component {
  onPress() {
    console.log('bookmarked')
  }

  render() {
    const { containerStyle } = this.props

    return (
      <View />
      // <Icon
      //   type='font-awesome'
      //   name="bookmark-o"
      //   containerStyle={[styles.container, containerStyle]}
      //   iconStyle={styles.icon}
      //   onPress={() => onPress()}
      // />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  icon: {
    fontWeight: '100',
    color: colors.fontLightGray,
  },
})
