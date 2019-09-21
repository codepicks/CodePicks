import React, { Component } from "react";
import { FlatList } from "react-native";
// @ts-ignore no types found
import TimerMixin from "react-timer-mixin";
import ArticleCard from "./ArticleCard";
import ArticleThumbnail from "./ArticleThumbnail";

type Props = {
  tabLabel: any;
  articles: any;
  fetchArticles: any;
};

type State = { refreshing: boolean };
type Item = any;
export default class ArticleList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      refreshing: false
    };
  }

  componentWillMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  onRefresh() {
    const { fetchArticles } = this.props;
    this.setState({ refreshing: true });
    fetchArticles();

    TimerMixin.setTimeout(() => {
      this.setState({ refreshing: false });
    }, 500);
  }

  renderArticle({ item, index }: { item: Item; index: number }) {
    const { tabLabel } = this.props;
    if (index === 0) {
      return <ArticleThumbnail article={item} />;
    }
    return <ArticleCard article={item} category={tabLabel} />;
  }

  render() {
    const { refreshing } = this.state;
    const { articles } = this.props;
    return (
      <FlatList
        data={articles}
        renderItem={data => this.renderArticle(data)}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={() => this.onRefresh()}
        refreshing={refreshing}
      />
    );
  }
}
