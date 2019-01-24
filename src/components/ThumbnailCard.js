import React, { Component } from 'react'
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native'
import { Thumbnail } from 'native-base'
import { colors } from '../constants'

class ThumbnailCard extends Component {
  render() {
    const {
      title, image, downsideTitle, onPressItem,
    } = this.props

    return (
      <TouchableOpacity
        onPress={() => onPressItem()}
      >
        <View style={styles.container} pointerEvents="none">
          <View style={[styles.overlay, { height: 360 }]} />
          <Thumbnail
            square
            style={styles.image}
            source={{ uri: image }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              {title}
            </Text>
            <Text style={styles.downsideTitle}>
              {downsideTitle}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 190,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    backgroundColor: '#CCC',
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    zIndex: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'HiraginoSans-W3',
    color: colors.white,
  },
  downsideTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    fontFamily: 'HiraginoSans-W3',
    color: colors.white,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: '100%',
    zIndex: 1,
  },
})

export default ThumbnailCard
