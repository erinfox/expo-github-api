import React, {Component} from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  StyleSheet,
  TextInput
} from "react-native";

export default class ModalPopUp extends Component {
  state = {
    modalVisible: false,
    text: null
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render(props) {
    return (
      <View style={{marginTop: 20}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}>
          <View style={styles.container}>
            <Text style={styles.textPadding}>
              Add notes to this Repository:{" "}
            </Text>
            <TextInput
              style={{
                height: 40,
                width: "75%",
                borderColor: "gray",
                borderWidth: 1
                // placeholder: "Type some notes here...",
                // placeholderTextColor: "black"
              }}
              onChangeText={text => this.setState({text})}
              value={this.state.text}
            />
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <Text style={styles.textPadding}>Submit notes</Text>
            </TouchableHighlight>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>{this.props.text}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

onPress = () => {
  // after adding an input on the repo, add the input value here:
  // https://jsonplaceholder.typicode.com/
  // sounds like a post request.....?
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink"
  },
  textPadding: {
    paddingVertical: 20
  }
});
