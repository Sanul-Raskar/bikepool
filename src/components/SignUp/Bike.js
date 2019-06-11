import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar
} from "react-native";

export default class Bike extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Text style={styles.text}> Do you have a Bike or Scooter? </Text>
        <View style={styles.bottomButtons}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                color: "#1a73e8",
                marginBottom: 50,
                marginTop: 30,
                borderColor: "#1a73e8",
                borderRadius: 10,
                borderWidth: 2,
                padding:10,
                textAlign:"center"
              }}
              onPress={() => navigate("")}
            >
             No
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.YesButton}
            onPress={() => navigate("AddBikeInfo")}
          >
            <Text style={styles.ButtonText}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: "white"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  YesButton: {
    backgroundColor: "#1a73e8",
    marginBottom: 50,
    borderRadius: 10,
    marginTop: 30
  },
  ButtonText: {
    fontSize: 18,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 18,
    textAlign:"center"
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});
