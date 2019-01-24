import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { colors } from '../constants'
import PickFormModal from './PickFormModal'

class PickIcon extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisible: false,
      showModal: false,
    }
  }

  componentWillMount() {
    const { auth } = this.props
    if (!auth.token) return

    this.setState({
      isVisible: true,
    })
  }

  onPress() {
    const { showModal } = this.state

    this.setState({
      showModal: !showModal,
    })
  }

  render() {
    const { containerStyle } = this.props
    const { isVisible, showModal } = this.state

    if (!isVisible) {
      return null
    }

    return (
      <View style={styles.container}>
        <Icon
          type="font-awesome"
          name="bookmark-o"
          containerStyle={containerStyle}
          iconStyle={styles.icon}
          onPress={() => this.onPress()}
        />
        <PickFormModal
          isVisible={showModal}
        />
      </View>
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

const StateToProps = ({ auth }) => {
  return {
    auth,
  }
}

export default connect(StateToProps)(withNavigation(PickIcon))
