import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { colors } from "../constants";
import { pickArticleSelect } from "../actions";
import PickFormModal from "./PickFormModal";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "flex-end",
    justifyContent: "flex-end"
  },
  icon: {
    fontWeight: "100",
    color: colors.fontLightGray
  }
});

type Props = {
  auth: any;
  containerStyle: any;
  pickArticleSelect: any;
  article: any;
};

type State = {
  isVisible: boolean;
  showModal: boolean;
};
class PickIcon extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isVisible: false,
      showModal: false
    };
  }

  componentWillMount() {
    const { auth } = this.props;
    if (!auth.token) return;

    this.setState({
      isVisible: true
    });
  }

  onPress() {
    const { article } = this.props;
    const { showModal } = this.state;

    // eslint-disable-next-line
    this.props.pickArticleSelect(article);

    this.setState({
      showModal: !showModal
    });
  }

  render() {
    const { containerStyle } = this.props;
    const { isVisible, showModal } = this.state;

    if (!isVisible) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Icon
          type="font-awesome"
          name="bookmark-o"
          containerStyle={containerStyle}
          iconStyle={styles.icon}
          onPress={() => this.onPress()}
        />
        <PickFormModal isVisible={showModal} />
      </View>
    );
  }
}

const StateToProps = ({ auth }: any) => {
  return {
    auth
  };
};

export default connect(
  StateToProps,
  {
    pickArticleSelect
  }
  // @ts-ignore // TODO: use react-redux hooks
)(withNavigation(PickIcon));
