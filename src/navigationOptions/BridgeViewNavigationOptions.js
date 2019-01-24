import React from 'react'
import {
  TouchableOpacity,
  Share,
  StyleSheet,
} from 'react-native'
import {
  Body,
  Header,
  Icon,
  Left,
  Right,
} from 'native-base'
import { BackIcon } from '../components'
import { colors } from '../constants'

export default navigation => ({
  header: () => {
    const { title, source_url } = navigation.state.params

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
          <TouchableOpacity
            onPress={() => Share.share({
              url: source_url,
              message: title,
              title,
              subject: '【CodePicks】ニュースの共有',
            })
              .catch(err => console.log(err))
            }
          >
            <Icon
              type="Entypo"
              name="share-alternative"
              style={styles.shareIcon}
            />
          </TouchableOpacity>
        </Right>
      </Header>
    )
  },
})

const styles = StyleSheet.create({
  shareIcon: {
    color: colors.white,
    fontSize: 20,
  },
})
