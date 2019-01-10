import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class EditName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Old Password"
          autoCorrect={false}
          returnKeyType="next"
        />

        <TextInput
          style={styles.textInput}
          placeholder="New Password"
          autoCorrect={false}
          returnKeyType="next"
        />

        <TextInput
          style={styles.textInput}
          placeholder="Re-Enter New Password"
          autoCorrect={false}
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: "center"
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    width: 280,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 20,
    marginBottom:30
  },
  saveButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    marginBottom: 14,
    width: 300,
    borderRadius: 24,
    marginTop: 30
  },
  saveButtonText: {
    fontSize: 22,
    textAlign: "center",
    height: 30,
    color: "white",
    fontWeight: "bold"
  }
});
