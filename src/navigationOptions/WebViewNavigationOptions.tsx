import React from "react";
import { Platform } from "react-native";
import { Body, Header, Left, Right, Title } from "native-base";
import { colors } from "../constants";
import { BackIcon, ShareIcon } from "../components";

export default (navigation: any) => ({
  header: () => {
    const { title, source_url } = navigation.state.params;

    return (
      <Header
        iosBarStyle="light-content"
        style={{
          backgroundColor: colors.primaryBlue,
          borderBottomWidth: 0
        }}
      >
        <Left>
          <BackIcon />
        </Left>
        <Body
          style={[
            Platform.select({
              ios: {
                paddingTop: 5
              },
              android: {
                marginTop: -3,
                marginLeft: 20
              }
            }),
            {
              flex: 5,
              justifyContent: "center",
              alignItems: "center"
            }
          ]}
        >
          <Title
            style={{
              color: colors.white,
              fontSize: 15,
              fontFamily: "HiraginoSans-W6",
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            {title}
          </Title>
        </Body>
        <Right>
          <ShareIcon
            url={source_url}
            message={title}
            title={title}
            subject="【CodePicks】ニュースの共有"
          />
        </Right>
      </Header>
    );
  }
});
