import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  AsyncStorage
} from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import FloatingLabelInput from "../FormAnimation/formAnimation";

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      email_font_color: "#1a73e8",
      email_onFocus_border: "#1a73e8",
      border_Color_email: "#dadce0",

      password_font_color: "#1a73e8",
      password_onFocus_border: "#1a73e8",
      border_Color_password: "#dadce0"
    };
  }
  handleEmailChange = newValue => {
    this.setState({ email: newValue });
  };
  handlePasswordChange = newValue => {
    this.setState({ password: newValue });
  };
  static navigationOptions = {
    header: null
  };
  _signInAsync = async () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "App" })],
      key: null
    });
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.dispatch(resetAction);
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.container}>
              <Text style={styles.title}>Login</Text>
              <Text style={styles.subheading}>Login with your Bikepool account</Text>

              <FloatingLabelInput
                label="Email"
                value={this.state.email}
                onChangeText={this.handleEmailChange}
                border={this.state.border_Color_email}
                keyboardLayout="email-address"
                fontColor={this.state.email_font_color}
                onFocusBorder={this.state.email_onFocus_border}
              />

              <FloatingLabelInput
                label="Password"
                value={this.state.password}
                onChangeText={this.handlePasswordChange}
                border={this.state.border_Color_password}
                keyboardLayout="default"
                passwordSecurity={true}
                fontColor={this.state.password_font_color}
                onFocusBorder={this.state.password_onFocus_border}
              />
              
              <Text
                style={{
                  marginBottom: 16,
                  fontSize: 18,
                  color:"#1a73e8"
                }}
              >
                Forgot Password?
              </Text>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <TouchableOpacity onPress={() => navigate("Signup")}>
                  <Text style={styles.signupButtonText}>Create Account</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={this._signInAsync}
                >
                  <Text style={styles.ButtonText}>Login</Text>
                </TouchableOpacity>
              </View>
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
    backgroundColor: "white",
    padding: 6
  },

  loginButton: {
    backgroundColor: "#1a73e8",
    marginBottom: 50,
    borderRadius: 10,
    marginTop: 20
  },

  ButtonText: {
    fontSize: 18,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 18,
    textAlign:"center"
  },
  title: {
    fontFamily: "sans-serif-light",
    fontWeight: "bold",
    fontSize: 26,
    color: "black",
    marginBottom: 14,
    textAlign: "center"
  },

  signupButtonText: {
    fontSize: 18,
    color: "#1a73e8",
    marginBottom: 50,
    marginTop: 20,
    borderColor: "#1a73e8",
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    textAlign:"center"
  },
  subheading: {
    fontFamily: "sans-serif-light",
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    marginBottom: 20,
    marginTop: 4,
    textAlign: "center"
  },
});
