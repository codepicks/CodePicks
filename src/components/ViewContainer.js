import React, { Component } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { colors } from '../config'

export default class ViewContainer extends Component {
  render() {
    const {
      children, style, noPadding, white,
    } = this.props

    return (
      <View
        style={[
          styles.container,
          noPadding ? styles.noPadding : {},
          white ? styles.white : {},
          style,
        ]}
      >
        <StatusBar
          barStyle="light-content"
        />
        {children}
      </View>
    )
  }
}

ViewContainer.defaultProps = {
  children: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: colors.white,
  },
  noPadding: {
    paddingTop: 0,
  },
  white: {
    backgroundColor: colors.white,
  },
})
