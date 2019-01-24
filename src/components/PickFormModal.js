import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import Modal from 'react-native-modal'
import { pickAriticlePost } from '../actions'
import { colors } from '../constants'

class PickFormModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisible: props.isVisible,
      text: '',
    }
  }

  componentWillReceiveProps({ isVisible, pick }) {
    this.setState({
      isVisible: pick !== null || isVisible,
    })
  }

  onPressSubmit() {
    const { text } = this.state
    const { pick } = this.props

    // eslint-disable-next-line
    this.props.pickAriticlePost({
      hash: pick.hash,
      text,
    })
  }

  render() {
    const { pick } = this.props
    const { isVisible } = this.state
    if (!pick) return null

    return (
      <Modal
        isVisible={isVisible}
        onBackdropPress={() => this.setState({ isVisible: false })}
        style={styles.container}
      >
        <View style={styles.inner}>
          <View style={styles.articleContainer}>
            <Image
              source={{ uri: pick.image }}
              style={styles.articleImage}
            />
            <View style={styles.articleInfo}>
              <Text style={styles.articleTitle}>{pick.title}</Text>
              <Text style={styles.articleSource}>{pick.source}</Text>
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="コメントを書く（任意）"
              onChangeText={text => this.setState({ text })}
            />
          </View>
          <View style={styles.submitButtonContainer}>
            <TouchableOpacity style={styles.submitButton} onPress={() => this.onPressSubmit()}>
              <Text style={styles.submitButtonText}>Pickする</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  inner: {
    flex: 0.6,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  articleContainer: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.fontLightGray,
    paddingBottom: 15,
  },
  articleImage: {
    width: 56,
    height: 56,
    borderRadius: 4,
  },
  articleInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 15,
  },
  articleTitle: {
    fontWeight: 'bold',
  },
  articleSource: {
    fontSize: 12,
    color: colors.fontLightGray,
  },
  textInputContainer: {
    flex: 1,
    paddingTop: 16,
  },
  textInput: {
  },
  submitButtonContainer: {
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 2,
    paddingVertical: 10,
  },
  submitButtonText: {
    color: colors.white,
    textAlign: 'center',
  },
})

const StateToProps = ({ pick }) => {
  return {
    pick,
  }
}

export default connect(StateToProps, {
  pickAriticlePost,
})(PickFormModal)
