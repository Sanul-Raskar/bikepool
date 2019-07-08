import React, { Component } from "react";
import { Text, View } from "react-native";
import MultiStep from "react-native-multistep-wizard";
import { NavigationActions } from "react-navigation";

import BasicProfile from "./signup";
import AddPlaces from "./AddPlaces";
import Bike from "./Bike";
import TaskStatus from "./AccountCreated";
import AccountCreated from "./AccountCreated";

export default class SignUpWizard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  finish = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: "MainScreen"
    });
    this.props.navigation.dispatch(navigateAction);
  };
  render() {
    const steps = [
      {
        name: "StepOne",
        component: <BasicProfile navigation={this.props.navigation} />
      },
      {
        name: "StepTwo",
        component: <AddPlaces navigation={this.props.navigation} />
      },
      {
        name: "StepThree",
        component: <Bike navigation={this.props.navigation} />
      },

      {
        name: "StepFour",
        component: <AccountCreated navigation={this.props.navigation} />
      }
    ];
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <MultiStep steps={steps} onFinish={this.finish} />
      </View>
    );
  }
}
