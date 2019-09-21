import React, { Component } from "react";
import {
  WebView,
  View,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform
} from "react-native";
import { Footer } from "native-base";
import { Icon } from "react-native-elements";
import { NavigationScreenProps } from "react-navigation";
import { ViewContainer, PickIcon } from "../components";
import { colors } from "../constants";

const styles = StyleSheet.create({
  // FIXME: shadow効かせる
  footer: {
    height: 20,
    backgroundColor: "#FFF",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 100, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    })
  },
  footerLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  footerRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  rightButtonsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  pickIcon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 20
  }
});

type Props = {} & NavigationScreenProps;

type State = {
  hasPrevious: boolean;
  hasNext: boolean;
};
class WebViewScreen extends Component<Props, State> {
  webview: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasPrevious: false,
      hasNext: false
    };
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  onNavigationStateChange(event: any) {
    this.setState({
      hasPrevious: event.canGoBack,
      hasNext: event.canGoForward
    });
  }

  render() {
    const { navigation } = this.props;

    const { article, source_url } = navigation.state.params;
    const { hasPrevious, hasNext } = this.state;

    return (
      <ViewContainer noPadding>
        <WebView
          ref={ref => {
            this.webview = ref;
          }}
          source={{ uri: source_url }}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
        />
        <Footer style={styles.footer}>
          <View style={styles.footerLeft}>
            <TouchableOpacity
              style={{ width: 45 }}
              onPress={() => this.webview.goBack()}
            >
              <Icon
                type="font-awesome"
                name="arrow-left"
                size={13}
                color={hasPrevious ? colors.primaryBlue : colors.fontLightGray}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: 45 }}
              onPress={() => this.webview.goForward()}
            >
              <Icon
                type="font-awesome"
                name="arrow-right"
                size={13}
                color={hasNext ? colors.primaryBlue : colors.fontLightGray}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.footerRight}>
            <View style={styles.rightButtonsContainer}>
              <PickIcon containerStyle={styles.pickIcon} article={article} />
            </View>
          </View>
        </Footer>
      </ViewContainer>
    );
  }
}

export default WebViewScreen;
