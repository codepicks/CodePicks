import React, { Component } from 'react'
import { LayoutAnimation } from 'react-native'
import { connect } from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { articlesFetch } from '../actions'
import { ViewContainer, ScrollableTabBar, ArticleList } from '../components'

class ArticleListScreen extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut()
  }

  render() {
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
              this.props.articlesFetch('all')
            }}
            articles={this.props.articles.all}
          />
          <ArticleList
            key="oss"
            tabLabel="オープンソース"
            fetchArticles={() => {
              this.props.articlesFetch('oss')
            }}
            articles={this.props.articles.oss}
          />
          <ArticleList
            key="productivity_tips"
            tabLabel="生産性Tips"
            fetchArticles={() => {
              this.props.articlesFetch('productivity_tips')
            }}
            articles={this.props.articles.productivity_tips}
          />
          <ArticleList
            key="personal_dev"
            tabLabel="個人開発"
            fetchArticles={() => {
              this.props.articlesFetch('personal_dev')
            }}
            articles={this.props.articles.personal_dev}
          />
          <ArticleList
            key="freelance"
            tabLabel="フリーランス"
            fetchArticles={() => {
              this.props.articlesFetch('freelance')
            }}
            articles={this.props.articles.freelance}
          />
        </ScrollableTabView>
      </ViewContainer>
    )
  }
}

const StateToProps = ({ articles }) => {
  return {
    articles,
  }
}

export default connect(StateToProps, {
  articlesFetch,
})(ArticleListScreen)
