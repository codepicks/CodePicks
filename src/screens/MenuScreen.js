import React, { Component } from 'react'
import { LayoutAnimation, StyleSheet } from 'react-native'
import { List, ListItem, Text, Left, Right, Icon, View } from 'native-base'
import { ViewContainer, MenuFooterAd } from '../components'
import { tracker } from '../services/googleAnalytics'

class MenuScreen extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut()
  }

  openWebView({ title, source_url, event }) {
    const { navigation } = this.props

    navigation.navigate('WebView', {
      title,
      source_url,
    })

    tracker.trackEvent(event, 'Click')
  }

  render() {
    return (
      <ViewContainer noPadding white>
        <List>
          <ListItem
            noIndent
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
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem
            noIndent
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
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem
            noIndent
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
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem
            noIndent
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
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem
            noIndent
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
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
        {/* <View style={styles.adContainer}>
          <MenuFooterAd />
        </View> */}
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  adContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
})

export default MenuScreen
