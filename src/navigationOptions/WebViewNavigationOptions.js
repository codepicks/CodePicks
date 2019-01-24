import React from 'react'
import {
  Platform,
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
  Title,
} from 'native-base'
import { colors } from '../constants'
import { BackIcon } from '../components'

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
        <Body
          style={[Platform.select({
            ios: {
              paddingTop: 5,
            },
            android: {
              marginTop: -3,
              marginLeft: 20,
            },
          }),
          {
            flex: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }]}
        >
          <Title
            style={{
              color: colors.white,
              fontSize: 15,
              fontFamily: 'HiraginoSans-W6',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {title}
          </Title>
        </Body>
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
