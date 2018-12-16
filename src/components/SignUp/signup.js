import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Fumi } from "react-native-textinput-effects";
import DatePicker from "react-native-datepicker";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "2016-05-15" };
  }
  static navigationOptions = {
    header: null
  };

  render() {
    var today = new Date("2016-02-29").toDateString();
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StatusBar barStyle="dark-content" backgroundColor="#ccebff" />
        <ScrollView>
          <View>
            <Text style={styles.title}>Sign Up</Text>
            <Fumi
              style={styles.input}
              label={"Name"}
              iconClass={FontAwesomeIcon}
              iconName={"user"}
              iconColor={"#0099ff"}
              iconSize={28}
            />
            <Fumi
              style={styles.input}
              label={"Email"}
              iconClass={FontAwesomeIcon}
              iconName={"envelope"}
              iconColor={"#0099ff"}
              iconSize={28}
            />
            <DatePicker
              style={styles.input}
              mode="date"
              date={this.state.date}
              placeholder="select birthdate"
              format="YYYY-MM-DD"
              minDate="1900-01-01"
              maxDate="2018-12-30"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              onDateChange={date => {
                this.setState({ date: date });
              }}
            />
            <Fumi
              style={styles.input}
              label={"Phone Number"}
              iconClass={FontAwesomeIcon}
              iconName={"envelope"}
              iconColor={"#0099ff"}
              iconSize={28}
              keyboardType="numeric"
             // onChangeText={(text) => this.onChanged(text)}
              value={this.state.mobileNumber}
              maxLength={10}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccebff",
    justifyContent: "center",
    textAlign: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10
  },
  input: {
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    borderRadius: 24,
    width: 300,
    height: 60,
    marginTop: 30,
    padding: 2,
    paddingRight: 10
  }
});


function onChanged(text) {
  var newText = "";
  var numbers = "0123456789";

  for (var i = 0; i < text.length; i++) {
    if (numbers.indexOf(text[i]) > -1) {
      newText = newText + text[i];
    } else {
      alert("Invalid mobile number");
    }
  }
  this.setState({ mobileNumber: newText });
}
