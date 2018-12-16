import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  SafeAreaView
} from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";

export default class topTabs extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <TopNavigator />
      </SafeAreaView>
    );
  }
}

export class PreviousRides extends Component {
  render() {
    return (
      <View>
        <Text style={styles.myText}>Previous Rides </Text>
      </View>
    );
  }
}

export class UpcomingRides extends Component {
  render() {
    return (
      <View>
        <Text style={styles.myText}>Upcoming Rides </Text>
      </View>
    );
  }
}

const TopNavigator = createMaterialTopTabNavigator(
  {
    Previous: { screen: PreviousRides, tabBarLabel: "Previous Rides" },
    Upcoming: { screen: UpcomingRides, tabBarLabel: "Upcoming Rides" }
  },
  {
    tabBarOptions: {
      activeTintColor: "blue",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "white"
      },
      indicatorStyle: { backgroundColor: "black" },
      pressColor: "grey"
    }
  }
);

const styles = StyleSheet.create({
  myText: {
    margin: 60,
    justifyContent: "center",
    fontSize: 22
  }
});
