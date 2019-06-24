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
      successView: true,
      failureView: false,
      creatingView: false,
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
                alignItems: "center"
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../../assets/img/accountCreated.jpg")}
                style={{ width: width, height: 300, marginTop: 10 }}
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
                alignItems: "center"
              }}
            >
              <Image
                resizeMode="contain"
                source={require("../../assets/img/accountFailure.jpg")}
                style={{ width: width, height: 300, marginTop: 10 }}
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
