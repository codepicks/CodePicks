import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import ThumbnailCard from './ThumbnailCard'

class ArticleThumbnail extends Component {
  onPressItem() {
    const { navigation, article } = this.props

    navigation.navigate('BridgeView', {
      article,
    })
  }

  render() {
    const { article } = this.props
    const {
      title, image, source, created_at,
    } = article
    const downsideTitle = `${source} | ${created_at}`

    return (
      <ThumbnailCard
        title={title}
        downsideTitle={downsideTitle}
        image={image}
        onPressItem={() => this.onPressItem()}
      />
    )
  }
}

export default withNavigation(ArticleThumbnail)
