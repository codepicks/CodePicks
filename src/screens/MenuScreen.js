import React from 'react'
import { LayoutAnimation, StyleSheet } from 'react-native'
import {
  List, ListItem, Text, Left, Right,
} from 'native-base'
import { Entypo } from '@expo/vector-icons'
import { ViewContainer } from '../components'

class MenuScreen extends React.Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut()
  }

  openWebView({ title, source_url, event }) {
    const { navigation } = this.props

    navigation.navigate('WebView', {
      title,
      source_url,
    })

    // tracker.trackEvent(event, 'Click')
  }

  render() {
    return (
      <ViewContainer noPadding white>
        <List>
          <ListItem
            noIndent
            style={styles.listitem}
            onPress={() => this.openWebView({
              title: 'CodepicksのTwitterをフォロー',
              source_url: 'https://twitter.com/codepicks/',
              event: 'https://twitter.com/codepicks/',
            })}
          >
            <Left>
              <Text>CodepicksのTwitterをフォロー</Text>
            </Left>
            <Right>
              <Entypo name="chevron-right" />
            </Right>
          </ListItem>
          <ListItem
            noIndent
            style={styles.listitem}
            onPress={() => this.openWebView({
              title: 'お問い合わせ',
              source_url: 'https://docs.google.com/forms/d/e/1FAIpQLSfZqWTGX2ml79aSeTzqXu0-7znisoZuJhZbmHo1LvrhvxAHQQ/viewform',
              event: 'お問い合わせ',
            })}
          >
            <Left>
              <Text>お問い合わせ</Text>
            </Left>
            <Right>
              <Entypo name="chevron-right" />
            </Right>
          </ListItem>
          <ListItem
            noIndent
            style={styles.listitem}
            onPress={() => this.openWebView({
              title: '利用規約',
              source_url: 'https://codepicks.jp/terms/',
              event: '利用規約',
            })}
          >
            <Left>
              <Text>利用規約</Text>
            </Left>
            <Right>
              <Entypo name="chevron-right" />
            </Right>
          </ListItem>
          <ListItem
            noIndent
            style={styles.listitem}
            onPress={() => this.openWebView({
              title: 'プライバシーポリシー',
              source_url: 'https://codepicks.jp/privacy-policy/',
              event: 'プライバシーポリシー',
            })}
          >
            <Left>
              <Text>プライバシーポリシー</Text>
            </Left>
            <Right>
              <Entypo name="chevron-right" />
            </Right>
          </ListItem>
          <ListItem
            noIndent
            style={styles.listitem}
            onPress={() => this.openWebView({
              title: 'CodePicksリポジトリ(Github)',
              source_url: 'https://github.com/kangyoosam/codepicks',
              event: 'CodePicksリポジトリ(Github)',
            })}
          >
            <Left>
              <Text>CodePicksリポジトリ(Github)</Text>
            </Left>
            <Right>
              <Entypo name="chevron-right" />
            </Right>
          </ListItem>
        </List>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  listitem: {
    height: 50,
  },
})

export default MenuScreen
