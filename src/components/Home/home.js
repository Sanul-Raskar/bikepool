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
import Ride from "./topTabs";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import LoginScreen from "../Login/login";
import SignUpScreen from "../SignUp/signup";

export class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.myText}>
          Home. Here will be Map and App will ask user whether he want to get
          ride or give ride.
        </Text>
      </View>
    );
  }
}

export class Rides extends Component {
  render() {
    return <Ride />;
  }
}

export class Settings extends Component {
  render() {
    return (
      <View>
        <Text style={styles.myText}>
          Here will be settings and profile info
        </Text>
      </View>
    );
  }
}

export default createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-home" color={tintColor} size={24} />
        )
      }
    },
    Rides: {
      screen: Rides,
      navigationOptions: {
        tabBarLabel: "Rides",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-car" color={tintColor} size={24} />
        )
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-settings" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "blue",
      inactiveTintColor: "grey"
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
