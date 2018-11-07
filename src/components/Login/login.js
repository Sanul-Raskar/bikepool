import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";

export default class login extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StatusBar barStyle="dark-content" backgroundColor="#ccebff" />
        <View style={styles.container}>
          <Image style={styles.logo} source={require("./logo.png")} />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            secureTextEntry
            style={styles.input}
            ref={input => (this.passwordInput = input)}
          />
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <Text>Forgot Password?</Text>
          <Text>Don't have an Account? Sign Up here</Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccebff"
  },
  logo: {
    width: 260,
    height: 200,
  marginBottom:16
  },
  input: {
    backgroundColor: "#e6f5ff",
    marginBottom: 10,
    height: 50,
    paddingHorizontal: 10,
    width: 300
  },
  loginButton: {
    backgroundColor: "#0099ff",
    paddingVertical: 10,
    marginBottom: 10,
    width: 300
  },
  loginButtonText: {
    fontSize:22,
    textAlign:"center",
    height: 30,
    color: "#fff",
    fontWeight: "bold"
  }
});
