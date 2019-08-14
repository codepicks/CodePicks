import React from 'react'
import {
  Body,
  Header,
  Left,
  Right,
} from 'native-base'
import { BackIcon, ShareIcon } from '../components'
import { colors } from '../constants'

export default navigation => ({
  header: () => {
    const { article } = navigation.state.params

    return (
      <Header
        iosBarStyle="light-content"
        style={{
          backgroundColor: colors.primaryBlue,
          borderBottomWidth: 0,
        }}
      >
        <Left>
          <BackIcon />
        </Left>
        <Body />
        <Right>
          <ShareIcon
            url={article.source_url}
            message={article.title}
            title={article.title}
            subject="【CodePicks】ニュースの共有"
          />
        </Right>
      </Header>
    )
  },
})
