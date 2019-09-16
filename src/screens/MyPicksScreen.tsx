import React, { Component } from "react";
import { View, StyleSheet, Text, Linking } from "react-native";
import { ViewContainer } from "../components";

class MyPicksScreen extends Component {
  render() {
    return (
      <ViewContainer>
        <View style={styles.container}>
          <Text style={styles.header}>助けてください！</Text>
          <Text style={styles.text}>CodePicksはオープンソースです。</Text>
          <Text style={styles.text}>
            「マイピックス」をはじめ色々な機能を追加していきますが、
          </Text>
          <Text
            onPress={() =>
              Linking.openURL("https://github.com/KangYoosam/CodePicks")
            }
            style={styles.link}
          >
            https:// github.com/KangYoosam/CodePicks
          </Text>
          <Text style={styles.text}>
            こちらにContributeしていただければ幸いです。
          </Text>
        </View>
      </ViewContainer>
    );
  }
}

// @ts-ignore
MyPicksScreen.navigationOptions = () => ({
  title: "マイピックス"
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  text: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  link: {
    textAlign: "center",
    color: "blue",
    marginBottom: 5
  }
});

export default MyPicksScreen;
