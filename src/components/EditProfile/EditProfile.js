import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  Picker,
  StatusBar,
  ActivityIndicator
} from "react-native";
import FloatingLabelInput from "../FormAnimation/formAnimation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DatePicker from "react-native-datepicker";
import { connect } from "react-redux";
import { getloginedUser, updateProfile } from "../../../action/userDataAction";

PROFILE_IMAGE_MAX_HEIGHT = 100;
PROFILE_IMAGE_MIN_HEIGHT = 60;
export class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      birthdate: "",
      gender: "",
      
      firstnameError: "",
      lastnameError: "",
      emailError: "",
      mobileError: "",
      birthdateError: "",
      genderError: "",
      
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

      border_Color_firstname: "#dadce0",
      border_Color_lastname: "#dadce0",
      border_Color_email: "#dadce0",
      border_Color_mobile: "#dadce0",

      border_Color_birthdate: "#dadce0",
      border_Color_gender: "#dadce0"
    };
  }
  componentDidMount() {
    this.updateState();
  }

  updateState = async () => {
    await this.props.getloginedUser();
    if (this.props.user.userData != null) {
      const user = this.props.user.userData;
      this.setState({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        mobile: user.mobile,
        birthdate: user.birthdate,
        gender: user.gender
      });
    }
  };

  setNewVariables = () => {
    let data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      mobile: this.state.mobile,
      birthdate: this.state.birthdate,
      gender: this.state.gender
    };

    this.props.updateProfile(data);
    this.updateState();
  };

  showActivityIndicator = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#1a73e8" />
      </View>
    );
  };

  showContent = () => {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Image
          style={{
            height: 100,
            width: 100,
            borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
            borderColor: "white",
            borderWidth: 3,
            overflow: "hidden",
            marginLeft: "auto",
            marginRight: "auto",
            marginVertical: 16
          }}
          source={{
            uri:
              "https://facebook.github.io/react-native/docs/assets/favicon.png"
          }}
        />
        <TouchableOpacity style={{ marginBottom: 10 }}>
          <Text style={{ textAlign: "center" }}>Edit Image</Text>
        </TouchableOpacity>
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
        {this.state.lastnameError !== "" && (
          <Text style={styles.error}>
            <Icon name="alert-circle" color="red" size={16} />{" "}
            {this.state.lastnameError}
          </Text>
        )}

        <FloatingLabelInput
          label="Email"
          value={this.state.email}
          border={this.state.border_Color_email}
          onChangeText={this.handleEmailChange}
          keyboardLayout="email-address"
          fontColor={this.state.email_font_color}
          onFocusBorder={this.state.email_onFocus_border}
        />

        {this.state.emailError !== "" && (
          <Text style={styles.error}>
            <Icon name="alert-circle" color="red" size={16} />{" "}
            {this.state.emailError}
          </Text>
        )}
        <FloatingLabelInput
          label="Mobile Number"
          value={this.state.mobile}
          border={this.state.border_Color_mobile}
          onChangeText={this.handleMobileChange}
          keyboardLayout="numeric"
          fontColor={this.state.mobile_font_color}
          onFocusBorder={this.state.mobile_onFocus_border}
        />

        {this.state.mobileError !== "" && (
          <Text style={styles.error}>
            <Icon name="alert-circle" color="red" size={16} />{" "}
            {this.state.mobileError}
          </Text>
        )}

        <Text
          style={{
            fontSize: 16,
            marginTop: 2,
            color: "#666666",
            zIndex: 10,
            backgroundColor: "white",
            width: 80,
            marginLeft: 8
          }}
        >
          Birth date
        </Text>

        <DatePicker
          style={styles.datePicker}
          date={this.state.birthdate}
          mode="date"
          showIcon={false}
          placeholder="Select Date (YYYY-MM-DD)"
          format="YYYY-MM-DD"
          minDate="1950-01-01"
          maxDate={this.state.today}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={date => {
            this.setState({ birthdate: date });
          }}
          customStyles={{
            dateInput: {
              borderColor: this.state.border_Color_birthdate,
              borderWidth: 1.5,
              borderRadius: 8,
              height: 50,
              marginBottom: 8
            }
          }}
        />

        {this.state.birthdateError !== "" && (
          <Text style={styles.error}>
            <Icon name="alert-circle" color="red" size={16} />{" "}
            {this.state.birthdateError}
          </Text>
        )}
        <Text
          style={{
            fontSize: 16,
            marginTop: 8,
            color: "#666666",
            zIndex: 10,
            backgroundColor: "white",
            width: 60,
            marginBottom: 0,
            marginLeft: 8
          }}
        >
          Gender
        </Text>

        <View
          style={{
            borderWidth: 1.5,
            borderRadius: 8,
            marginBottom: 8,
            borderColor: "#dadce0",
            marginTop: -8
          }}
        >
          <Picker
            selectedValue={this.state.gender}
            style={{
              height: 50,
              width: "100%",
              borderColor: "#dadce0",
              borderWidth: 1.5,
              borderRadius: 8,
              marginTop: 0,
              color: "#666666"
            }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ gender: itemValue })
            }
          >
            <Picker.Item label="Select" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </View>

        {this.state.genderError !== "" && (
          <Text style={styles.error}>
            <Icon name="alert-circle" color="red" size={16} />{" "}
            {this.state.genderError}
          </Text>
        )}

        <View style={styles.bottomButtons}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                color: "#1a73e8",
                marginBottom: 50,
                marginTop: 60,
                borderColor: "#1a73e8",
                borderRadius: 10,
                borderWidth: 2,
                padding: 10,
                textAlign: "center"
              }}
              onPress={() => this.props.navigation.goBack()}
            >
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpButton} onPress={this.validate}>
            <Text style={styles.ButtonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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

  validateLastName = () => {
    let regExp = /^[A-Za-z]+$/;
    if (this.state.lastname === "") {
      this.setState({
        border_Color_lastname: "red",
        lastnameError: "Please fill this field.",
        lastname_font_color: "red",
        lastname_onFocus_border: "red"
      });
      return false;
    } else if (this.state.lastname.match(regExp)) {
      this.setState({
        border_Color_lastname: "#dadce0",
        lastnameError: "",
        lastname_font_color: "#1a73e8",
        lastname_onFocus_border: "#1a73e8"
      });
      return true;
    } else {
      this.setState({
        border_Color_lastname: "red",
        lastnameError: "Alphabets only!",
        lastname_font_color: "red",
        lastname_onFocus_border: "red"
      });
      return false;
    }
  };

  validateMobile = () => {
    let regExp = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;
    if (this.state.mobile === "") {
      this.setState({
        border_Color_mobile: "red",
        mobileError: "Please fill this field.",
        mobile_font_color: "red",
        mobile_onFocus_border: "red"
      });
      return false;
    } else if (this.state.mobile.match(regExp)) {
      this.setState({
        border_Color_mobile: "#dadce0",
        mobileError: "",
        mobile_font_color: "#1a73e8",
        mobile_onFocus_border: "#1a73e8"
      });
      return true;
    } else {
      this.setState({
        border_Color_mobile: "red",
        mobileError: "Enter valid mobile number.",
        mobile_font_color: "red",
        mobile_onFocus_border: "red"
      });
      return false;
    }
  };

  validateEmail = () => {
    let regExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (this.state.email === "") {
      this.setState({
        border_Color_email: "red",
        emailError: "Please fill this field.",
        email_font_color: "red",
        email_onFocus_border: "red"
      });
      return false;
    } else if (this.state.email.match(regExp)) {
      this.setState({
        border_Color_email: "#dadce0",
        emailError: "",
        email_font_color: "#1a73e8",
        email_onFocus_border: "#1a73e8"
      });
      return true;
    } else {
      this.setState({
        border_Color_email: "red",
        emailError: "Invalid Email!",
        email_font_color: "red",
        email_onFocus_border: "red"
      });
      return false;
    }
  };

  validateGender = () => {
    if (this.state.gender === "" || this.state.gender === "Select") {
      this.setState({
        border_Color_gender: "red",
        genderError: "Please select gender",
        gender_font_color: "red"
      });
      return false;
    } else {
      this.setState({
        border_Color_gender: "#dadce0",
        genderError: "",
        gender_font_color: "#1a73e8"
      });
      return true;
    }
  };

  validateBirthdate = () => {
    if (this.state.birthdate === "") {
      this.setState({
        border_Color_birthdate: "red",
        birthdateError: "Please select birthdate",
        birthdate_font_color: "red"
      });
      return false;
    } else {
      this.setState({
        border_Color_birthdate: "#dadce0",
        birthdateError: "",
        birthdate_font_color: "#1a73e8"
      });
      return true;
    }
  };

  validate = () => {
    if (
      this.validateFirstName() &
      this.validateLastName() &
      this.validateMobile() &
      this.validateEmail() &
      this.validateBirthdate() &
      this.validateGender()
    ) {
      this.setNewVariables();
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.props.user.loading
            ? this.showActivityIndicator()
            : this.showContent()}
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
    fontSize: 26,
    color: "black",
    marginBottom: 6,
    marginTop: 10,
    textAlign: "center"
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
  error: {
    paddingTop: 4,
    paddingBottom: 6,
    fontSize: 16,
    color: "red"
  },
  signUpButton: {
    backgroundColor: "#1a73e8",
    marginBottom: 50,
    borderRadius: 10,
    marginTop: 60
  },
  ButtonText: {
    fontSize: 18,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 18,
    textAlign: "center"
  },
  bottomButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  datePicker: {
    width: "100%"
  }
});

const mapStateToProps = state => {
  const user = state.ViewProfile;
  const update = state.UpdateProfile;
  return {
    user,
    update
  };
};

const mapDispatchToProps = {
  getloginedUser,
  updateProfile
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
