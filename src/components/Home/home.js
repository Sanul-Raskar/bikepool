import React, { Component } from "react";
import Rides from "./topTabs";
import HomeScreen from "./HomeScreen";
import Settings from "./Settings";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export const tabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
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
          <FontAwesome5 name="motorcycle" color={tintColor} size={24} />
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
      activeTintColor: "#1a73e8",
      inactiveTintColor: "#6a707c"
    }
  }
);
