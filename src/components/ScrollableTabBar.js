import React, { Component } from 'react'
import {
  View,
  Animated,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native'
import { colors } from '../constants'

const WINDOW_WIDTH = Dimensions.get('window').width

class ScrollableTabBar extends Component {
  constructor(props) {
    super(props)

    this.tabsMeasurements = []
    this.state = {
      leftTabUnderline: new Animated.Value(0),
      widthTabUnderline: new Animated.Value(0),
      containerWidth: null,
    }
  }

  renderTab(name, page, isTabActive, onPressHandler, onLayoutHandler) {
    const tabStyle = isTabActive ? styles.tabActive : styles.tabInActive
    const tabTextStyle = isTabActive ? styles.tabTextActive : styles.tabTextInActive

    return (
      <TouchableOpacity
        key={`${name}_${page}`}
        accessible
        accessibilityLabel={name}
        accessibilityTraits="button"
        onPress={() => onPressHandler(page)}
        onLayout={onLayoutHandler}
      >
        <View style={[styles.tab, tabStyle]}>
          <Text style={[styles.tabText, tabTextStyle]}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const tabUnderlineStyle = {
      position: 'absolute',
      height: 4,
      backgroundColor: 'navy',
      bottom: 0,
    }

    const dynamicTabUnderline = {
      left: this.state.leftTabUnderline,
      width: this.state.widthTabUnderline,
    }

    return (
      <View
        style={[styles.container, this.props.style]}
        onLayout={this.onContainerLayout}
      >
        <ScrollView
          ref={(scrollView) => { this.scrollView = scrollView }}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          directionalLockEnabled
          bounces={false}
          scrollsToTop={false}
          style={styles.tabContainer}
        >
          <View
            style={[styles.tabs, { width: this.state.containerWidth }, this.props.tabsContainerStyle]}
            ref="tabContainer"
            onLayout={this.onTabContainerLayout.bind(this)}
          >
            {this.props.tabs.map((name, page) => {
              const isTabActive = this.props.activeTab === page
              const renderTab = this.props.renderTab || this.renderTab
              return renderTab(name, page, isTabActive, this.props.goToPage, this.measureTab.bind(this, page))
            })}
            <Animated.View style={[tabUnderlineStyle, dynamicTabUnderline, this.props.underlineStyle]} />
          </View>
        </ScrollView>
      </View>
    )
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.tabs) !== JSON.stringify(nextProps.tabs) && this.state.containerWidth) {
      this.setState({ containerWidth: null })
    }
  }

  onTabContainerLayout(e) {
    this._tabContainerMeasurements = e.nativeEvent.layout
    let width = this._tabContainerMeasurements.width
    if (width < WINDOW_WIDTH) {
      width = WINDOW_WIDTH
    }
    this.setState({ containerWidth: width })
  }

  onContainerLayout(e) {
    this._containerMeasurements = e.nativeEvent.layout
  }

  measureTab(page, event) {
    const { x, width, height } = event.nativeEvent.layout
    this.tabsMeasurements[page] = {
      left: x, right: x + width, width, height,
    }
  }

  updateTabUnderline(position, pageOffset, tabCount) {
    const lineLeft = this.tabsMeasurements[position].left
    const lineRight = this.tabsMeasurements[position].right

    if (position < tabCount - 1) {
      const nextTabLeft = this.tabsMeasurements[position + 1].left
      const nextTabRight = this.tabsMeasurements[position + 1].right

      const newLineLeft = ((pageOffset * nextTabLeft) + ((1 - pageOffset) * lineLeft))
      const newLineRight = ((pageOffset * nextTabRight) + ((1 - pageOffset) * lineRight))

      this.state.leftTabUnderline.setValue(newLineLeft)
      this.state.widthTabUnderline.setValue(newLineRight - newLineLeft)
    } else {
      this.state.leftTabUnderline.setValue(lineLeft)
      this.state.widthTabUnderline.setValue(lineRight - lineLeft)
    }
  }

  updateTabPanel(position, pageOffset) {
    const containerWidth = this._containerMeasurements.width
    const tabWidth = this.tabsMeasurements[position].width
    const nextTabMeasurements = this.tabsMeasurements[position + 1]
    const nextTabWidth = (nextTabMeasurements && nextTabMeasurements.width) || 0
    const tabOffset = this.tabsMeasurements[position].left
    const absolutePageOffset = pageOffset * tabWidth
    let newScrollX = tabOffset + absolutePageOffset

    newScrollX -= (containerWidth - ((1 - pageOffset) * tabWidth) - (pageOffset * nextTabWidth)) / 2
    newScrollX = newScrollX >= 0 ? newScrollX : 0

    const rightBoundScroll = this._tabContainerMeasurements.width - (this._containerMeasurements.width)
    newScrollX = newScrollX > rightBoundScroll ? rightBoundScroll : newScrollX
    this.scrollView.scrollTo({ x: newScrollX, y: 0, animated: false })
  }

  necessarilyMeasurementsCompleted(position, isLastTab) {
    return this.tabsMeasurements[position]
      && (isLastTab || this.tabsMeasurements[position + 1])
      && this._tabContainerMeasurements
      && this._containerMeasurements
  }

  updateView(offset) {
    const position = Math.floor(offset.value)
    const pageOffset = offset.value % 1
    const tabCount = this.props.tabs.length
    const lastTabPosition = tabCount - 1

    if (tabCount === 0 || offset.value < 0 || offset.value > lastTabPosition) {
      return
    }

    if (this.necessarilyMeasurementsCompleted(position, position === lastTabPosition)) {
      this.updateTabPanel(position, pageOffset)
      this.updateTabUnderline(position, pageOffset, tabCount)
    }
  }
}

const styles = StyleSheet.create({
  tabContainer: {
    height: '7%',
    backgroundColor: colors.primaryBlue,
  },
  tabWrapper: {
    flex: 1,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: 6,
    height: 44,
    paddingLeft: 12,
    paddingRight: 12,
    paddingVertical: 0,
  },
  tabs: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabActive: {
    backgroundColor: colors.white,
  },
  tabInActive: {
    backgroundColor: colors.primaryBlue,
  },
  tabText: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tabTextActive: {
    color: colors.primaryBlue,
  },
  tabTextInActive: {
    color: colors.white,
  },
  container: {
    height: (Platform.OS === 'ios') ? 60 : 45,
    paddingTop: (Platform.OS === 'ios') ? 20 : 5,
    backgroundColor: colors.primaryBlue,
  },
})

export default ScrollableTabBar
