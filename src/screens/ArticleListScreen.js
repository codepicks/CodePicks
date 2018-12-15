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
            key='all'
            tabLabel='全ニュース'
            fetchArticles={() => {
              this.props.articlesFetch('all')
            }}
            articles={this.props.articles.all}
          />
          <ArticleList
            key='industry'
            tabLabel='業界・できごと'
            fetchArticles={() => {
              this.props.articlesFetch('industry')
            }}
            articles={this.props.articles.industry}
          />
          <ArticleList
            key='management'
            tabLabel='経営・開業'
            fetchArticles={() => {
              this.props.articlesFetch('management')
            }}
            articles={this.props.articles.management}
          />
          <ArticleList
            key='life'
            tabLabel='人生・暮らし'
            fetchArticles={() => {
              this.props.articlesFetch('life')
            }}
            articles={this.props.articles.life}
          />
          <ArticleList
            key='academic'
            tabLabel='アカデミック'
            fetchArticles={() => {
              this.props.articlesFetch('academic')
            }}
            articles={this.props.articles.academic}
          />
          <ArticleList
            key='clinical'
            tabLabel='臨床・診療'
            fetchArticles={() => {
              this.props.articlesFetch('clinical')
            }}
            articles={this.props.articles.clinical}
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
