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
    this.props.nextFn();
  };

  getAllData = async () => {
    let data = this.props.getState();
    console.log(data);
    dataObj = {
      firstname: data[0].firstname,
      lastname: data[0].lastname,
      email: data[0].email,
      mobile: data[0].mobile,
      birthdate: data[0].birthdate,
      gender: data[0].gender,
      password: data[0].password,
      worklat: data[1].WorkLat,
      worklng: data[1].WorkLng,
      homelat: data[1].HomeLat,
      homelng: data[1].HomeLng,
      manufacturer: data[2].manufacturer,
      modal: data[2].modal,
      bikecolor: data[2].bikeColor,
      drivinglicense: data[2].drivingLicense,
      vehiclelicense: data[2].vehicleLicense
    };

    try {
      let response = await fetch(
        "https://sanultemp.000webhostapp.com/user_registration.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(dataObj)
        }
      );

      let responseJson = await response.json();
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
        throw error;
      }
    } catch (error) {
      console.error(error);
    }

    /*
    fetch("https://sanultemp.000webhostapp.com/user_registration.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataObj)
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
      });*/
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
