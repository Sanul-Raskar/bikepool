import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet
} from "react-native";
import Spinner from "react-native-spinkit";

export default class AccountCreated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successView: false,
      failureView: false,
      creatingView: true,
      isVisible: true,
      size: 100,
      color: "#1a73e8",
      type: "WanderingCubes"
    };
  }

  nextPreprocess = () => {
    // Go to next step
    this.props.nextFn();
  };

  getAllData = () => {
    let data = this.props.getState();
    console.log(data);

    let Firstname = data[0].firstname;
    let Lastname = data[0].lastname;
    let Email = data[0].email;
    let Mobile = data[0].mobile;
    let Password = data[0].password;
    let Birthdate = data[0].birthdate;
    let Gender = data[0].gender;

    let WorkLat = data[1].WorkLat;
    let WorkLng = data[1].WorkLng;
    let HomeLat = data[1].HomeLat;
    let HomeLng = data[1].HomeLng;

    let Manufacturer = data[2].manufacturer;
    let Modal = data[2].modal;
    let bikeColor = data[2].bikeColor;
    let DrivingLicense = data[2].drivingLicense;
    let VehicleLicense = data[2].vehicleLicense;

    fetch("https://sanultemp.000webhostapp.com/user_registration.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstname: Firstname,
        lastname: Lastname,
        email: Email,
        password: Password
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        // Showing response message coming from server after inserting records.
        console.log(responseJson);
        if (responseJson == "Success") {
          console.log("Execute SuccessView");
          this.setState({
            creatingView: false,
            successView: true,
            failureView: false
          });
        } else {
          console.log("Execute FailureView");
          this.setState({
            creatingView: false,
            successView: false,
            failureView: true
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  componentDidMount() {
    this.getAllData();
  }

  render() {
    let { height, width } = Dimensions.get("window");
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1, height: height }}>
        {this.state.creatingView && (
          <View style={styles.wrapper}>
            <Spinner
              style={styles.spinner}
              isVisible={this.state.isVisible}
              size={this.state.size}
              type={this.state.type}
              color={this.state.color}
            />
            <Text
              style={{ textAlign: "center", fontSize: 20, fontWeight: "600" }}
            >
              Creating Account. Please wait....
            </Text>
          </View>
        )}

        {this.state.successView && (
          <View style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <View
              style={{
                flex: 1,
                backgroundColor: "#63a6ff",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../../assets/img/accountCreated.jpg")}
                style={{ width: width, height: 300, marginTop: -30 }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "600",
                  color: "white"
                }}
              >
                Account Created Successfully
              </Text>
              <TouchableOpacity onPress={this.nextPreprocess}>
                <Text
                  style={{
                    fontSize: 18,
                    color: "white",
                    marginBottom: 10,
                    marginTop: 30,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    padding: 10,
                    textAlign: "center"
                  }}
                >
                  Done
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {this.state.failureView && (
          <View style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <View
              style={{
                flex: 1,
                backgroundColor: "#d85a5b",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../../assets/img/accountFailure.jpg")}
                style={{ width: width, height: 300, marginTop: -30 }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  color: "white"
                }}
              >
                There was an error while creating your account.Please try again
                later.
              </Text>
              <TouchableOpacity onPress={this.nextPreprocess}>
                <Text
                  style={{
                    color: "white",
                    marginBottom: 10,
                    marginTop: 30,
                    borderColor: "white",
                    borderRadius: 10,
                    borderWidth: 2,
                    padding: 10,
                    textAlign: "center",
                    fontSize: 18
                  }}
                >
                  Done
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },

  spinner: {
    marginBottom: 50,
    alignItems: "center"
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
