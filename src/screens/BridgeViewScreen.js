import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { ViewContainer } from '../components'
import { colors } from '../constants'

class BridgeViewScreen extends Component {
  onPressNext() {
    const { navigation } = this.props
    const { article } = navigation.state.params

    navigation.navigate('WebView', {
      article,
      title: article.title,
      source_url: article.source_url,
    })
  }

  render() {
    const { navigation } = this.props
    const { article } = navigation.state.params

    return (
      <ViewContainer>
        <View style={styles.articleContainer}>
          <Text style={styles.articleTitle}>
            {article.title}
          </Text>
          <Text style={styles.articleMeta}>
            {article.source}
            |
            {article.created_at}
          </Text>

          <TouchableOpacity
            style={styles.goNextButton}
            onPress={() => this.onPressNext()}
          >
            <Text style={styles.goNextText}>続きを読む</Text>
          </TouchableOpacity>
        </View>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  articleContainer: {
    width: '100%',
    height: 190,
    padding: 20,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'HiraginoSans-W3',
  },
  articleMeta: {
    fontSize: 11,
    fontWeight: 'bold',
    fontFamily: 'HiraginoSans-W3',
    color: colors.fontLightGray,
    marginVertical: 10,
  },
  goNextButton: {
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.primaryBlue,
    paddingVertical: 10,
    borderRadius: 5,
  },
  goNextText: {
    textAlign: 'center',
    color: colors.primaryBlue,
  },
})

export default BridgeViewScreen
