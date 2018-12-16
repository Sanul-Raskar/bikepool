import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import LoginScreen from "../Login/login";
import SignUpScreen from "../SignUp/signup";
import HomeScreen from "../Home/home";


export default class componentName extends Component {
  render() {
    return <AppStackNavigator />;
  }
}
const AppStackNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Signup: { screen: SignUpScreen },
    Home:{ screen: HomeScreen }
  },
  {
    initialRouteName: "Login"
  }
);
