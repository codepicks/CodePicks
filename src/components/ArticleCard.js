import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import {
  Body,
  ListItem,
  Thumbnail,
  Right,
} from 'native-base'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { colors } from '../constants'
import PickIcon from './PickIcon'

class ArticleCard extends Component {
  onPressItem() {
    const { navigation, article } = this.props

    navigation.navigate('BridgeView', {
      article,
    })
  }

  renderRight() {
    const { auth, article } = this.props

    if (!auth.token) return null
    return (
      <Right>
        <PickIcon article={article} />
      </Right>
    )
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
            {source}
            |
            {created_at}
          </Text>
        </Body>
        {this.renderRight()}
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

const StateToProps = ({ auth }) => {
  return {
    auth,
  }
}

export default connect(StateToProps)(withNavigation(ArticleCard))
