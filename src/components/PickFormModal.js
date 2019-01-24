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
import { articlesFetch } from '../actions'
import { colors } from '../constants'

class PickFormModal extends Component {
  render() {
    return (
      <Modal {...this.props} style={styles.container}>
        <View style={styles.inner}>
          <View style={styles.articleContainer}>
            <Image
              source={{ uri: 'https://pbs.twimg.com/profile_images/1068575392011669505/XQPJnreV_normal.jpg' }}
              style={styles.articleImage}
            />
            <View style={styles.articleInfo}>
              <Text style={styles.articleTitle}>タイトルタイトルタイトル</Text>
              <Text style={styles.articleSource}>www.itmedia.com</Text>
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="コメントを書く（任意）"
              onChangeText={text => console.log(text)}
            />
          </View>
          <View style={styles.submitButtonContainer}>
            <TouchableOpacity style={styles.submitButton}>
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
    height: '60%',
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

export default connect(null, {
  articlesFetch,
})(PickFormModal)
