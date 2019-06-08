import React, { Component } from 'react';
import { StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    Text,
    Image } from 'react-native';
    import FloatingLabelInput from "../FormAnimation/formAnimation";


    PROFILE_IMAGE_MAX_HEIGHT = 100;
PROFILE_IMAGE_MIN_HEIGHT = 60;
export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        FirstName:"",
        LastName:"",
        Email:"",
        Mobile:"",
        Password:"",
        Gender:"",
        Birthdate:"",

        firstname_font_color: "#1a73e8",
      firstname_onFocus_border: "#1a73e8",
      lastname_font_color: "#1a73e8",
      lastname_onFocus_border: "#1a73e8",
      email_font_color: "#1a73e8",
      email_onFocus_border: "#1a73e8",
      mobile_font_color: "#1a73e8",
      mobile_onFocus_border: "#1a73e8",

      birthdate_font_color: "#1a73e8",
      birthdate_onFocus_border: "#1a73e8",
      gender_font_color: "#1a73e8",
      gender_onFocus_border: "#1a73e8",

      password1_font_color: "#1a73e8",
      password1_onFocus_border: "#1a73e8",
      password2_font_color: "#1a73e8",
      password2_onFocus_border: "#1a73e8",
      border_Color_firstname: "#dadce0",
      border_Color_lastname: "#dadce0",
      border_Color_email: "#dadce0",
      border_Color_mobile: "#dadce0",

      border_Color_birthdate: "#dadce0",
      border_Color_gender: "#dadce0",

      border_Color_password1: "#dadce0",
      border_Color_password2: "#dadce0"
    
    };
  }

  render() {
    return (
      <View>
        <Text> EditProfile </Text>
      </View>
    );
  }
}
