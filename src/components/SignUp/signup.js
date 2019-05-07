import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from "react-native";
import FloatingLabelInput from "./formAnimation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DatePicker from "react-native-datepicker";

export default class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password1: "",
    password2: "",
    birthdate: "",
    firstnameError: false,
    lastnameError: false,
    emailError: false,
    mobileError: false,
    password1Error: false,
    password2Error: false,
    birthdateError: false,
    pass:true,
    border_Color_firstname: "#dadce0",
    border_Color_lastname: "#dadce0",
    border_Color_email: "#dadce0",
    border_Color_mobile: "#dadce0",
    border_Color_password1: "#dadce0",
    border_Color_password2: "#dadce0",
    border_Color_birthdate: "#dadce0"
  };

  handleFirstNameChange = newValue => {
    this.setState({ firstname: newValue });
  };
  handleLastNameChange = newValue => {
    this.setState({ lastname: newValue });
  };
  handleEmailChange = newValue => {
    this.setState({ email: newValue });
  };
  handleMobileChange = newValue => {
    this.setState({ mobile: newValue });
  };
  handlePassword1Change = newValue => {
    this.setState({ password1: newValue });
  };
  handlePassword2Change = newValue => {
    this.setState({ password2: newValue });
  };

  /*let regExp = /^[A-Za-z]+$/;
    if (this.state.firstname.match(regExp)) {
      alert("Your name have accepted : you can try another");
    } else {
      this.setState({ border_Color_firstname: "red" });
      alert("Not accepted");
    }*/

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.heading}>Sign Up</Text>
          <Text style={styles.subheading}>Create your Account</Text>

          <FloatingLabelInput
            label="First Name"
            value={this.state.firstname}
            onChangeText={this.handleFirstNameChange}
            border={this.state.border_Color_firstname}
            keyboardLayout="default"
          />
          {this.state.firstnameError && (
            <Text style={styles.error}>
              <Icon name="alert-circle" color="red" size={16} /> Use alphabets
              only!
            </Text>
          )}

          <FloatingLabelInput
            label="Last Name"
            value={this.state.lastname}
            border={this.state.border_Color_lastname}
            onChangeText={this.handleLastNameChange}
            keyboardLayout="default"
          />
          <FloatingLabelInput
            label="Email"
            value={this.state.email}
            border={this.state.border_Color_email}
            onChangeText={this.handleEmailChange}
            keyboardLayout="email-address"
          />
          <FloatingLabelInput
            label="Mobile Number"
            value={this.state.mobile}
            border={this.state.border_Color_mobile}
            onChangeText={this.handleMobileChange}
            keyboardLayout="numeric"
          />

          <FloatingLabelInput
            label="Password"
            value={this.state.password1}
            border={this.state.border_Color_password1}
            onChangeText={this.handlePassword1Change}
            keyboardLayout="default"
            passwordSecurity = {this.state.pass}
          />
         
          <FloatingLabelInput
            label="Confirm Password"
            value={this.state.password2}
            border={this.state.border_Color_password2}
            onChangeText={this.handlePassword2Change}
            keyboardLayout="default"
            passwordSecurity = {this.state.pass}
          />

          <View style={styles.bottomButtons}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  color: "#1a73e8",
                  marginBottom: 50,
                  marginTop: 60
                }}
              >
                Login instead
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpButton}>
              <Text style={styles.ButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 22
  },
  heading: {
    fontFamily: "sans-serif-light",
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
    marginBottom: 6,
    marginTop: 10,
    textAlign: "center"
  },
  subheading: {
    fontFamily: "sans-serif-light",
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    marginBottom: 20,
    marginTop: 4,
    textAlign: "center"
  },
  error: {
    paddingTop: 4,
    paddingBottom: 6,
    fontSize: 16,
    color: "red"
  },
  signUpButton: {
    backgroundColor: "#1a73e8",
    paddingVertical: 10,
    marginBottom: 50,
    borderRadius: 10,
    width: 100,
    marginTop: 50
  },
  ButtonText: {
    fontSize: 20,
    textAlign: "center",
    color: "white"
  },
  bottomButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
