import React from 'react'
import { Icon } from 'expo'

import { colors } from '../constants'

export default class TabBarIcon extends React.Component {
  render() {
    const { name, focused } = this.props

    return (
      <Icon.Ionicons
        name={name}
        size={22}
        style={{ marginBottom: -3 }}
        color={focused ? colors.tabIconSelected : colors.tabIconDefault}
      />
    )
  }
}
