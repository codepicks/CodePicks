/* eslint-disable no-shadow */
import React, { Component } from "react";
import { LayoutAnimation } from "react-native";
import { connect } from "react-redux";
import ScrollableTabView from "react-native-scrollable-tab-view";
import { articlesFetch } from "../actions";
import { ViewContainer, ScrollableTabBar, ArticleList } from "../components";

type Props = {
  articles: any;
  articlesFetch: any;
};

class ArticleListScreen extends Component<Props> {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  render() {
    const { articlesFetch, articles } = this.props;
    return (
      <ViewContainer>
        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar />}
        >
          <ArticleList
            key="all"
            tabLabel="全ニュース"
            fetchArticles={() => {
              articlesFetch("all");
            }}
            articles={articles.all}
          />
          <ArticleList
            key="oss"
            tabLabel="オープンソース"
            fetchArticles={() => {
              articlesFetch("oss");
            }}
            articles={articles.oss}
          />
          <ArticleList
            key="productivity_tips"
            tabLabel="生産性Tips"
            fetchArticles={() => {
              articlesFetch("productivity_tips");
            }}
            articles={articles.productivity_tips}
          />
          <ArticleList
            key="personal_dev"
            tabLabel="個人開発"
            fetchArticles={() => {
              articlesFetch("personal_dev");
            }}
            articles={articles.personal_dev}
          />
          <ArticleList
            key="freelance"
            tabLabel="フリーランス"
            fetchArticles={() => {
              articlesFetch("freelance");
            }}
            articles={articles.freelance}
          />
        </ScrollableTabView>
      </ViewContainer>
    );
  }
}

const StateToProps = ({ articles }) => {
  return {
    articles
  };
};

export default connect(
  StateToProps,
  {
    articlesFetch
  }
)(ArticleListScreen);
