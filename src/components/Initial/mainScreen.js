import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image
} from "react-native";
import { NavigationActions } from "react-navigation";

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bikepool</Text>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Image
          style={styles.logo}
          source={require("../../assets/img/bikepool.png")}
          resizeMode="contain"
        />

        <View style={styles.bottomButtons}>
          <TouchableOpacity
            style={styles.Buttons}
            onPress={() => navigate("Login")}
          >
            <Text style={styles.ButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Buttons}
            onPress={() => navigate("SignUpWizard")}
          >
            <Text style={styles.ButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 22
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 0.5
  },
  Buttons: {
    backgroundColor: "#1a73e8",
    marginBottom: 18,
    borderRadius: 10,
    marginHorizontal: 30
  },
  ButtonText: {
    fontSize: 18,
    color: "white",
    paddingTop: 10,
    paddingBottom: 12,
    paddingHorizontal: 22,
    textAlign: "center"
  },
  title: {
    position: "absolute",
    top: 10,
    fontFamily: "sans-serif-light",
    fontWeight: "bold",
    fontSize: 36,
    color: "black",
    marginBottom: 10
  },
  bottomButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 6
  }
});
