import React, {Component} from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  TextInput
} from "react-native";

export default class ModalPopUp extends Component {
  state = {
    modalVisible: false,
    text: null,
    postedText: []
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
            <Text style={styles.text}>
              Add notes to the {this.props.text} repository:
            </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.setState({text})}
              value={this.state.text}
              placeholder={"Start typing your note here..."}
            />
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
                this.setState({
                  postedText: this.state.postedText.concat(this.state.text)
                });
                this.setState({text: ""});
              }}>
              <Text style={styles.text}>Submit notes</Text>
            </TouchableHighlight>
            <View>
              {this.state.postedText.map(x => (
                <Text>{x}</Text>
              ))}
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={styles.repoText}>{this.props.text}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

onPress = () => {
  // after adding an input for the repo notes, store the input value here:
  // https://jsonplaceholder.typicode.com/
  // sounds like a post request
  // https://github.com/invertase/react-native-firebase-starter
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink"
  },
  text: {
    paddingVertical: 20,
    fontSize: 18
  },
  textInput: {
    height: 40,
    width: "75%",
    backgroundColor: "white"
  },
  repoText: {
    fontSize: 18,
    color: "#808080"
  }
});
