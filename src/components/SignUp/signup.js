import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView,StatusBar
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Fumi } from "react-native-textinput-effects";
export default class componentName extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      <StatusBar barStyle="dark-content" backgroundColor="#ccebff" />
        <View>
          <Text style={styles.title}>Sign Up</Text>
          <Fumi
            style={styles.input}
            label={"Name"}
            iconClass={FontAwesomeIcon}
            iconName={"user"}
            iconColor={"#0099ff"}
            iconSize={28}
          />
          <Fumi
            style={styles.input}
            label={"Email"}
            iconClass={FontAwesomeIcon}
            iconName={"envelope"}
            iconColor={"#0099ff"}
            iconSize={28}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccebff",
    justifyContent: "center",
    textAlign: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10
  },
  input: {
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    borderRadius: 24,
    width: 300,
    height: 60,
    marginTop: 30,
    padding: 2,
    paddingRight: 10
  }
});
