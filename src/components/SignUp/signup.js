import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView
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
    birthdate:"",
    firstnameError: false,
    lastnameError: false,
    emailError: false,
    mobileError: false,
    password1Error: false,
    password2Error: false,
    birthdateError: false,

  };

  /*handleTextChange = newText => this.setState({ value: newText });*/

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.heading}>Sign Up</Text>
          <Text style={styles.subheading}>Create your Account</Text>
          
          <FloatingLabelInput
            label="First Name"
            value={this.state.firstname}
            /*onChangeText={this.handleTextChange}*/
          />
          {  this.state.firstnameError && 
          <Text style={styles.error}>
          <Icon name="alert-circle" color="red" size={16} />
          {" "} Use alphabets only!
          </Text>
          }

          <FloatingLabelInput label="Last Name" value={this.state.lastname} />
          <FloatingLabelInput label="Email" value={this.state.email} />
          <FloatingLabelInput label="Mobile Number" value={this.state.mobile} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20
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
  error:{
    paddingTop: 4,
    paddingBottom: 6,
    fontSize:16,
    color:"red"
  }
});
