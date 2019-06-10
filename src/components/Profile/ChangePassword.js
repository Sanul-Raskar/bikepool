import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar
} from "react-native";
import FloatingLabelInput from "../FormAnimation/formAnimation";

export default class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: "",
      newPassword1: "",
      newPassword2: "",

      oldPassword_font_color: "#1a73e8",
      oldPassword_onFocus_border: "#1a73e8",
      border_Color_oldPassword: "#dadce0",

      newPassword1_font_color: "#1a73e8",
      newPassword1_onFocus_border: "#1a73e8",
      border_Color_newPassword1: "#dadce0",

      newPassword2_font_color: "#1a73e8",
      newPassword2_onFocus_border: "#1a73e8",
      border_Color_newPassword2: "#dadce0"
    };
  }

  handleOldPassword = newValue => {
    this.setState({ oldPassword: newValue });
  };
  handleNewPassword1 = newValue => {
    this.setState({ newPassword1: newValue });
  };
  handleNewPassword2 = newValue => {
    this.setState({ newPassword2: newValue });
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <FloatingLabelInput
            label="Old Password"
            value={this.state.oldPassword}
            onChangeText={this.handleOldPassword}
            border={this.state.border_Color_oldPassword}
            keyboardLayout="default"
            fontColor={this.state.oldPassword_font_color}
            onFocusBorder={this.state.oldPassword_onFocus_border}
            passwordSecurity={true}
          />
          <FloatingLabelInput
            label="New Password"
            value={this.state.newPassword1}
            onChangeText={this.handleNewPassword1}
            border={this.state.border_Color_newPassword1}
            keyboardLayout="default"
            fontColor={this.state.newPassword1_font_color}
            onFocusBorder={this.state.newPassword1_onFocus_border}
            passwordSecurity={true}
          />
          <FloatingLabelInput
            label="Confirm New Password"
            value={this.state.newPassword2}
            onChangeText={this.handleNewPassword2}
            border={this.state.border_Color_newPassword2}
            keyboardLayout="default"
            fontColor={this.state.newPassword2_font_color}
            onFocusBorder={this.state.newPassword2_onFocus_border}
            passwordSecurity={true}
          />

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.CancelButton}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.UpdateButton}>
              <Text style={styles.UpdateButtonText}>Update</Text>
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
  UpdateButton: {
    backgroundColor: "#1a73e8",
    marginBottom: 50,
    borderRadius: 10,
    marginTop: 30
  },
  UpdateButtonText: {
    fontSize: 18,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 18
  },
  CancelButton: {
    fontSize: 18,
    color: "#1a73e8",
    marginBottom: 50,
    marginTop: 30,
    borderColor: "#1a73e8",
    borderRadius: 10,
    borderWidth: 2,
    padding: 10
  }
});
