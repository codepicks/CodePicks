/* eslint-disable no-shadow */
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { NavigationScreenProps } from "react-navigation";
import { commentsFetch } from "../actions";
import { ViewContainer, CommentItem } from "../components";
import { colors } from "../constants";

const styles = StyleSheet.create({
  articleContainer: {
    width: "100%",
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor: colors.fontGray
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "HiraginoSans-W3"
  },
  articleMeta: {
    fontSize: 11,
    fontWeight: "bold",
    fontFamily: "HiraginoSans-W3",
    color: colors.fontLightGray,
    marginVertical: 10
  },
  goNextButton: {
    width: "100%",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.primaryBlue,
    paddingVertical: 10,
    borderRadius: 5
  },
  goNextText: {
    textAlign: "center",
    color: colors.primaryBlue
  },
  picksContainer: {
    flex: 1
  }
});

type Props = {
  comments: any;
  commentsFetch: any;
} & NavigationScreenProps;

// TODO: move this type to types folder
type Comment = {
  hash: string;
};

class BridgeViewScreen extends Component<Props> {
  componentWillMount() {
    const { navigation, commentsFetch } = this.props;
    const { article } = navigation.state.params;

    commentsFetch(article.hash);
  }

  onPressNext() {
    const { navigation } = this.props;
    const { article } = navigation.state.params;

    navigation.navigate("WebView", {
      article,
      title: article.title,
      source_url: article.source_url
    });
  }

  // eslint-disable-next-line
  renderComments(currentComments: Comment[]) {
    if (!currentComments) return null;

    return currentComments.map((comment: Comment) => (
      <CommentItem key={comment.hash} item={comment} />
    ));
  }

  render() {
    const { navigation, comments } = this.props;
    const { article } = navigation.state.params;
    const currentComments = comments[article.hash];

    return (
      <ViewContainer>
        <View style={styles.articleContainer}>
          <Text style={styles.articleTitle}>{article.title}</Text>
          <Text style={styles.articleMeta}>
            {`${article.source}|${article.created_at}`}
          </Text>
          <TouchableOpacity
            style={styles.goNextButton}
            onPress={() => this.onPressNext()}
          >
            <Text style={styles.goNextText}>続きを読む</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.picksContainer}>
          {this.renderComments(currentComments)}
        </View>
      </ViewContainer>
    );
  }
}

type State = any; // TODO fix type

const StateToProps = ({ comments }: State) => {
  return {
    comments
  };
};

export default connect(
  StateToProps,
  {
    commentsFetch
  }
)(BridgeViewScreen);
