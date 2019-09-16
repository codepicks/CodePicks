import React, { Component } from "react";
import { FlatList } from "react-native";
import TimerMixin from "react-timer-mixin";
import ArticleCard from "./ArticleCard";
import ArticleThumbnail from "./ArticleThumbnail";

type Props = {
  tabLabel: any;
  articles: any;
  fetchArticles: any;
};

type State = { refreshing: boolean };
export default class ArticleList extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false
    };
  }

  componentWillMount() {
    this.props.fetchArticles();
  }

  onRefresh() {
    this.setState({ refreshing: true });
    this.props.fetchArticles();

    TimerMixin.setTimeout(() => {
      this.setState({ refreshing: false });
    }, 500);
  }

  renderArticle({ item, index }) {
    if (index === 0) {
      return <ArticleThumbnail article={item} />;
    }
    return <ArticleCard article={item} category={this.props.tabLabel} />;
  }

  render() {
    const { refreshing } = this.state;

    return (
      <FlatList
        data={this.props.articles}
        renderItem={data => this.renderArticle(data)}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={() => this.onRefresh()}
        refreshing={refreshing}
      />
    );
  }
}
