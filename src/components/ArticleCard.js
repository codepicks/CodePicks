import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Body, ListItem, Thumbnail, Right } from 'native-base'
import { withNavigation } from 'react-navigation'
import { colors } from '../constants'
import PickIcon from './PickIcon'

class ArticleCard extends Component {
  onPressItem() {
    const { navigation, article, category } = this.props

    navigation.navigate('WebView', {
      title: article.title,
      source_url: article.source_url,
      category,
    })
  }

  render() {
    const { article } = this.props
    const {
      title, image, source, created_at,
    } = article

    return (
      <ListItem
        onPress={() => this.onPressItem()}
        style={styles.ListItem}
      >
        <Thumbnail
          square
          source={{
            uri: image,
          }}
          style={{ backgroundColor: '#CCC' }}
        />
        <Body style={styles.body}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.relativeTime}>
            {source} | {created_at}
          </Text>
        </Body>
        <Right>
          <PickIcon />
        </Right>
      </ListItem>
    )
  }
}

const styles = StyleSheet.create({
  ListItem: {
    backgroundColor: colors.white,
    marginLeft: 0,
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  body: {
    paddingLeft: 13,
  },
  title: {
    color: colors.fontGray,
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
  relativeTime: {
    color: colors.fontLightGray,
    fontSize: 12,
  },
})

export default withNavigation(ArticleCard)
