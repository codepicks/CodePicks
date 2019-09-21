import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import Modal from "react-native-modal";
import { pickAriticlePost } from "../actions";
import { colors } from "../constants";
import PickingArticle from "./PickingArticle";

const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: "flex-end"
  },
  inner: {
    flex: 0.6,
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 15
  },
  textInputContainer: {
    flex: 1,
    paddingTop: 16
  },
  textInput: {},
  submitButtonContainer: {
    marginBottom: 15
  },
  submitButton: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 2,
    paddingVertical: 10
  },
  submitButtonText: {
    color: colors.white,
    textAlign: "center"
  }
});

type Props = { isVisible: boolean; pick: any; pickAriticlePost: any };
type State = { isVisible: boolean; text: string };
class PickFormModal extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isVisible: props.isVisible,
      text: ""
    };
  }

  componentWillReceiveProps({ isVisible, pick }: Props) {
    this.setState({
      isVisible: pick !== null || isVisible
    });
  }

  onPressSubmit() {
    const { text } = this.state;
    const { pick } = this.props;

    // eslint-disable-next-line
    this.props.pickAriticlePost({
      hash: pick.hash,
      text
    });
  }

  render() {
    const { pick } = this.props;
    const { isVisible } = this.state;
    if (!pick) return null;

    return (
      <Modal
        isVisible={isVisible}
        onBackdropPress={() => this.setState({ isVisible: false })}
        style={styles.container}
      >
        <View style={styles.inner}>
          <PickingArticle article={pick} />
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="コメントを書く（任意）"
              onChangeText={text => this.setState({ text })}
            />
          </View>
          <View style={styles.submitButtonContainer}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => this.onPressSubmit()}
            >
              <Text style={styles.submitButtonText}>Pickする</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const StateToProps = ({ pick }: any) => {
  return {
    pick
  };
};

export default connect(
  StateToProps,
  {
    pickAriticlePost
  }
)(PickFormModal);
