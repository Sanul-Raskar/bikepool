import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar,
  ScrollView
} from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
export default class login extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Home" })],
      key: null
    });

    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.container}>
              <Text style={styles.title}>Login</Text>
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
              <TouchableOpacity
                onPress={() => this.props.navigation.dispatch(resetAction)}
                style={styles.loginButton}
              >
                <Text style={styles.ButtonText}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.dispatch(resetAction)}
                style={styles.GoogleButton}
              >
                <Text style={styles.ButtonText}>Login with Google</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.dispatch(resetAction)}
                style={styles.FaceBookButton}
              >
                <Text style={styles.ButtonText}>Login with Facebook</Text>
              </TouchableOpacity>
              <Text
                style={{
                  textDecorationLine: "underline",
                  fontWeight: "500",
                  marginBottom: 14
                }}
              >
                Forgot Password?
              </Text>
              <Text style={{ marginBottom: 6 }}>Don't have an Account?</Text>
              <Text
                style={{
                  textDecorationLine: "underline",
                  fontWeight: "500",
                  marginBottom: 4
                }}
                onPress={() => navigate("Signup")}
              >
                Sign Up here
              </Text>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
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
    marginBottom: 16
  },
  input: {
    backgroundColor: "#e6e6e6",
    marginBottom: 14,
    height: 42,
    paddingHorizontal: 18,
    width: 300,
    borderRadius: 24
  },
  loginButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    marginBottom: 50,
    width: 300,
    borderRadius: 24
  },
  GoogleButton: {
    backgroundColor: "rgb(211, 72, 54)",
    paddingVertical: 10,
    marginBottom: 14,
    width: 300,
    borderRadius: 24
  },
  FaceBookButton: {
    backgroundColor: "rgb(60,90,153)",
    paddingVertical: 10,
    marginBottom: 14,
    width: 300,
    borderRadius: 24
  },
  ButtonText: {
    fontSize: 22,
    textAlign: "center",
    height: 30,
    color: "white",
    fontWeight: "bold"
  },
  title: {
    fontFamily: "sans-serif-light",
    fontWeight: "bold",
    fontSize: 36,
    color: "black",
    marginBottom: 20,
    marginTop: 20
  }
});
