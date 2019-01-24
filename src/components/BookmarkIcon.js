import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { colors } from '../constants'

export default class ArticleCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisible: false,
    }
  }

  componentWillMount() {

  }

  onPress() {
    console.log('bookmarked')
  }

  render() {
    const { containerStyle } = this.props
    const { isVisible } = this.state

    if (!isVisible) {
      return null
    }

    return (
      <Icon
        type='font-awesome'
        name="bookmark-o"
        containerStyle={[styles.container, containerStyle]}
        iconStyle={styles.icon}
        onPress={() => this.onPress()}
      />
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
