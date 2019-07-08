import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView,StatusBar } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SearchBox from "../Search/AutoComplete";
import { Left, Body, Right, Card, CardItem } from "native-base";

export default class Ride extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnDefaultToggleSwitch: true
    };
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View
          style={{ paddingHorizontal: 22, borderRadius: 10, marginTop: 10 }}
        >
          <Card>
            <CardItem>
              <Left>
                <Text style={styles.toggleSwitchLabels}>Offer Ride</Text>
              </Left>
              <Body style={{ alignItems: "center" }}>
                <ToggleSwitch
                  isOn={this.state.isOnDefaultToggleSwitch}
                  onColor="rgb(51, 51, 51)"
                  offColor="rgb(51, 51, 51)"
                  size="medium"
                  onToggle={isOnDefaultToggleSwitch => {
                    this.setState({ isOnDefaultToggleSwitch });
                  }}
                />
              </Body>
              <Right>
                <Text style={styles.toggleSwitchLabels}>Get Ride</Text>
              </Right>
            </CardItem>
          </Card>
        </View>
        <ScrollView>
          <SearchBox />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toggleSwitchLabels: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  }
});
