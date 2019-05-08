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
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password1: "",
      password2: "",
      firstnameError: "",
      lastnameError: "",
      emailError: "",
      mobileError: "",
      password1Error: "",
      password2Error: "",
      pass: true,
      firstname_font_color: "#1a73e8",
      firstname_onFocus_border: "#1a73e8",
      lastname_font_color: "#1a73e8",
      lastname_onFocus_border: "#1a73e8",
      email_font_color: "#1a73e8",
      email_onFocus_border: "#1a73e8",
      mobile_font_color: "#1a73e8",
      mobile_onFocus_border: "#1a73e8",
      password1_font_color: "#1a73e8",
      password1_onFocus_border: "#1a73e8",
      password2_font_color: "#1a73e8",
      password2_onFocus_border: "#1a73e8",
      border_Color_firstname: "#dadce0",
      border_Color_lastname: "#dadce0",
      border_Color_email: "#dadce0",
      border_Color_mobile: "#dadce0",
      border_Color_password1: "#dadce0",
      border_Color_password2: "#dadce0"
    };
    this.validate = this.validate.bind(this);
    this.validateFirstName = this.validateFirstName.bind(this);
  }

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

  validateFirstName = () => {
    let regExp = /^[A-Za-z]+$/;
    if (this.state.firstname === "") {
      this.setState({
        border_Color_firstname: "red",
        firstnameError: "Please fill this field.",
        firstname_font_color: "red",
        firstname_onFocus_border: "red"
      });
      return false;
    } else if (this.state.firstname.match(regExp)) {
      this.setState({
        border_Color_firstname: "#dadce0",
        firstnameError: "",
        firstname_font_color: "#1a73e8",
        firstname_onFocus_border: "#1a73e8"
      });
      return true;
    } else {
      this.setState({
        border_Color_firstname: "red",
        firstnameError: "Alphabets only!",
        firstname_font_color: "red",
        firstname_onFocus_border: "red"
      });
      return false;
    }
  };

  validate = () => {
    if (this.validateFirstName()) {
    }
  };
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
            fontColor={this.state.firstname_font_color}
            onFocusBorder={this.state.firstname_onFocus_border}
          />

          {this.state.firstnameError !== "" && (
            <Text style={styles.error}>
              <Icon name="alert-circle" color="red" size={16} />{" "}
              {this.state.firstnameError}
            </Text>
          )}

          <FloatingLabelInput
            label="Last Name"
            value={this.state.lastname}
            border={this.state.border_Color_lastname}
            onChangeText={this.handleLastNameChange}
            keyboardLayout="default"
            fontColor={this.state.lastname_font_color}
            onFocusBorder={this.state.lastname_onFocus_border}
          />
          <FloatingLabelInput
            label="Email"
            value={this.state.email}
            border={this.state.border_Color_email}
            onChangeText={this.handleEmailChange}
            keyboardLayout="email-address"
            fontColor={this.state.email_font_color}
            onFocusBorder={this.state.email_onFocus_border}
          />
          <FloatingLabelInput
            label="Mobile Number"
            value={this.state.mobile}
            border={this.state.border_Color_mobile}
            onChangeText={this.handleMobileChange}
            keyboardLayout="numeric"
            fontColor={this.state.mobile_font_color}
            onFocusBorder={this.state.mobile_onFocus_border}
          />

          <FloatingLabelInput
            label="Password"
            value={this.state.password1}
            border={this.state.border_Color_password1}
            onChangeText={this.handlePassword1Change}
            keyboardLayout="default"
            passwordSecurity={this.state.pass}
            fontColor={this.state.password1_font_color}
            onFocusBorder={this.state.password1_onFocus_border}
          />

          <FloatingLabelInput
            label="Confirm Password"
            value={this.state.password2}
            border={this.state.border_Color_password2}
            onChangeText={this.handlePassword2Change}
            keyboardLayout="default"
            passwordSecurity={this.state.pass}
            fontColor={this.state.password2_font_color}
            onFocusBorder={this.state.password2_onFocus_border}
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
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={this.validate}
            >
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
