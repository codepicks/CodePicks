import {
  Body,
  Header,
  Icon,
  Left,
  Right,
  Title,
} from 'native-base'
import { Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../constants'

export default navigation => ({
  header: () => {
    const { title } = navigation.state.params

    return (
      <Header
        iosBarStyle="light-content"
        style={{
          backgroundColor: colors.primaryBlue,
          borderBottomWidth: 0,
        }}
      >
        <Left>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flex: 1,
              width: 50,
              paddingTop: Platform.select({
                ios: 8,
                android: 13,
              }),
              paddingRight: 20,
            }}
          >
            <Icon
              name={Platform.select({
                ios: 'ios-arrow-back',
                android: 'md-arrow-back',
              })}
              size={20}
              style={{
                textAlign: 'center',
                color: '#FFF',
              }}
            />
          </TouchableOpacity>
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
        <Right />
      </Header>
    )
  },
})
