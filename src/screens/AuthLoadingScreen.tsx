import React, { Component } from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";
import { connect } from "react-redux";
import { NavigationScreenProps } from "react-navigation";
import { authSetToken } from "../actions";
import { navigateWithReset } from "../utils";

type Props = {
  authSetToken: any;
} & NavigationScreenProps;
class AuthLoadingScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const token = await AsyncStorage.getItem("token");

    this.props.authSetToken(token);
    navigateWithReset("ArticleList", this.props.navigation);
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default connect(
  null,
  {
    authSetToken
  }
)(AuthLoadingScreen);
