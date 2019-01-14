import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image
} from "react-native";
import {  NavigationActions } from "react-navigation";

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bikepool</Text>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Image
          style={styles.logo}
          source={require("../../assets/img/bikepool.png")}
        />
        <TouchableOpacity
          style={styles.LoginButton}
          onPress={() => navigate("Login")}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.SignUpButton}
          onPress={() => navigate("Signup")}
        >
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 0.5
  },
  LoginButton: {
    position: "absolute",
    bottom: 30,
    left: 12,
    backgroundColor: "black",
    paddingVertical: 10,
    width: 160,
    borderRadius: 24
  },
  loginButtonText: {
    fontSize: 18,
    textAlign: "center",
    height: 30,
    color: "white",
    fontWeight: "bold"
  },
  SignUpButton: {
    position: "absolute",
    bottom: 30,
    right: 12,
    backgroundColor: "black",
    paddingVertical: 10,
    width: 160,
    borderRadius: 24
  },
  signupButtonText: {
    fontSize: 18,
    textAlign: "center",
    height: 30,
    color: "white",
    fontWeight: "bold"
  },
  title: {
    position: "absolute",
    top: 10,
    fontFamily: "sans-serif-light",
    fontWeight: "bold",
    fontSize: 36,
    color: "black",
    marginBottom: 0.5,
    marginTop: 2
  }
});
