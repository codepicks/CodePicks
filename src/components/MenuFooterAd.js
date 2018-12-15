import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native'

class MenuFooterAd extends Component {
  onPressAd() {
    Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSf6mfbL59Vu_jLldQNlax6ss7Nt4Lhhfn9cSnyA-GLZCIbpxA/viewform')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.onPressAd()} style={styles.imageTouchable}>
          <Image
            source={{ uri: 'https://s3-ap-northeast-1.amazonaws.com/image.oned.exam.jp/assets/images/ad-oned-group.png' }}
            style={styles.adImage}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  adImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
})

export default MenuFooterAd
