import React, { Component } from 'react'
import {
  View, Image, Text, StyleSheet,
} from 'react-native'
import { colors } from '../constants'

type Props = {
  article: any
}
export default class PickingArticle extends Component<Props> {
  render() {
    const { article } = this.props

    return (
      <View style={styles.articleContainer}>
        <Image source={{ uri: article.image }} style={styles.articleImage} />
        <View style={styles.articleInfo}>
          <Text style={styles.articleTitle}>{article.title}</Text>
          <Text style={styles.articleSource}>{article.source}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
})
