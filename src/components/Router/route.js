import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import MainScreen from "../Initial/mainScreen";
import LoginScreen from "../Login/login";
import SignUpScreen from "../SignUp/signup";
import HomeScreen from "../Home/home";
import EditProfile from "../EditProfile/editProfile";
import EditFirstName from "../EditProfile/editFirstName";
import EditLastName from "../EditProfile/editLastName";

export default class componentName extends Component {
  render() {
    return <AppStackNavigator />;
  }
}
const AppStackNavigator = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen,
      navigationOptions: {
        header: null
      }
    },
    Login: { screen: LoginScreen },
    Signup: { screen: SignUpScreen },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    EditProfile: {
      screen: EditProfile,
      navigationOptions: {
        title: "Edit Account",
        headerStyle: {
          backgroundColor: "black"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    EditFirstName: {
      screen: EditFirstName,
      navigationOptions: {
        title: "Edit First Name",
        headerStyle: {
          backgroundColor: "black"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    EditLastName: {
      screen: EditLastName,
      navigationOptions: {
        title: "Edit Last Name",
        headerStyle: {
          backgroundColor: "black"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    }
  },
  {
    initialRouteName: "MainScreen"
  }
);
