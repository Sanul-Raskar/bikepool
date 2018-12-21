import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { InputGroup, Input } from "native-base";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const screenWidth = Dimensions.get("window").width;

    return (
      <View style={{ width: screenWidth, top: 0, position: "absolute" }}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Source</Text>
          <InputGroup>
            <MaterialIcon name="search" size={15} color="black" />
            <Input
              /*onFocus={() => toggleSearchResultModal("pickUp")}*/
              style={styles.inputSearch}
              placeholder="Choose pick-up location"
              /* onChangeText={handleInput.bind(this, "pickUp")}*/
              /*value={selectedPickUp && selectedPickUp.name}*/
            />
          </InputGroup>
        </View>
        <View style={styles.secondInputWrapper}>
          <Text style={styles.label}>Destination</Text>
          <InputGroup>
            <MaterialIcon name="search" size={15} color="black" />
            <Input
              /* onFocus={() => toggleSearchResultModal("dropOff")}*/
              style={styles.inputSearch}
              placeholder="Choose drop-off location"
              /* onChangeText={handleInput.bind(this, "dropOff")}*/
              /*  value={selectedDropOff && selectedDropOff.name}*/
            />
          </InputGroup>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    marginLeft: 15,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 0,
    backgroundColor: "#fff",
    opacity: 0.9,
    borderRadius: 7
  },
  secondInputWrapper: {
    marginLeft: 15,
    marginRight: 10,
    marginTop: 0,
    backgroundColor: "#fff",
    opacity: 0.9,
    borderRadius: 7
  },
  inputSearch: {
    fontSize: 14
  },
  label: {
    fontSize: 14,
    fontStyle: "italic",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 0,
    color: "black"
  }
});
