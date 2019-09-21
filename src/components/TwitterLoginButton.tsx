/* eslint-disable no-shadow */
import React, { Component } from "react";
import { Text, StyleSheet, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TWLoginButton } from "react-native-simple-twitter";
import { withNavigation, NavigationScreenProps } from "react-navigation";
import { connect } from "react-redux";
import { authRegister } from "../actions";
import { colors } from "../constants";

const styles = StyleSheet.create({
  text: {
    color: colors.white
  },
  icon: {
    color: colors.white,
    fontSize: 16,
    marginRight: 10
  }
});

type Props = {
  authRegister: any;
  auth: any;
} & NavigationScreenProps;

type User = any;
class TwitterLoginButton extends Component<Props> {
  onSuccess = (user: User) => {
    const { authRegister } = this.props;
    authRegister(user);

    Alert.alert("Success", "ログインに成功しました。Pickできます。", [
      {
        text: "OK",
        onPress: () => {
          // redirect?
        }
      }
    ]);
  };

  render() {
    const { auth } = this.props;

    if (auth.token) return null;

    return (
      <TWLoginButton onSuccess={this.onSuccess}>
        <Entypo name="twitter" style={styles.icon} />
        <Text style={styles.text}>Twitterでログインする</Text>
      </TWLoginButton>
    );
  }
}

type State = any; // TODO: add type for State
const StateToProps = ({ auth }: State) => {
  return {
    auth
  };
};

export default connect(
  StateToProps,
  {
    authRegister
  }
)(withNavigation(TwitterLoginButton));
