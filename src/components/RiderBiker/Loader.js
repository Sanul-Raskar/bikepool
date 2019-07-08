import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ImageBackground
} from "react-native";
import Spinner from "react-native-spinkit";

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      size: 300,
      color: "#1a73e8",
      type: "Pulse"
    };
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <ImageBackground
          source={require("../../assets/img/mapLoader.png")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        >
          <View style={styles.wrapper}>
            <Spinner
              style={styles.spinner}
              isVisible={this.state.isVisible}
              size={this.state.size}
              type={this.state.type}
              color={this.state.color}
            />
            <Text
              style={{ textAlign: "center", fontSize: 26, fontWeight: "600" }}
            >
              Finding rides for you...
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a73e8"
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
