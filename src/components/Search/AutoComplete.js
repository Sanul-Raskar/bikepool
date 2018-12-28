import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions
} from "react-native";
import RNGooglePlaces from "react-native-google-places";
import { InputGroup } from "native-base";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

export default class GPlacesDemo extends Component {
  openSourceSearchModal() {
    RNGooglePlaces.openAutocompleteModal()
      .then(place => {
        console.log(place);
        // place represents user's selection from the
        // suggestions and it is a simplified Google Place object.
      })
      .catch(error => console.log(error.message)); // error is a Javascript Error object
  }

  openDestinationSearchModal() {
    RNGooglePlaces.openAutocompleteModal()
      .then(place => {
        console.log(place);
        // place represents user's selection from the
        // suggestions and it is a simplified Google Place object.
      })
      .catch(error => console.log(error.message)); // error is a Javascript Error object
  }

  render() {
    const screenWidth = Dimensions.get("window").width;
    return (
      <View style={{ width: screenWidth, top: 0, position: "absolute" }}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Source</Text>
          <TouchableOpacity
            onPress={() => this.openSourceSearchModal()}
          >
            <InputGroup>
              <MaterialIcon
                name="search"
                size={15}
                color="black"
              />
              <Text style={styles.inputSearch}>Choose pick-off location</Text>
            </InputGroup>
          </TouchableOpacity>
        </View>
        <View style={styles.secondInputWrapper}>
          <Text style={styles.label}>Destination</Text>
          <TouchableOpacity onPress={() => this.openDestinationSearchModal()}>
            <InputGroup>
              <MaterialIcon
                name="search"
                size={15}
                color="black"
              />
              <Text style={styles.inputSearch}>Choose drop-off location</Text>
            </InputGroup>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  inputWrapper: {
    marginLeft: 15,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 2,
    backgroundColor: "#fff",
    borderRadius: 7
  },
  secondInputWrapper: {
    marginLeft: 15,
    marginRight: 10,
    marginTop: 2,
    backgroundColor: "#fff",
    borderRadius: 7
  },
  inputSearch: {
    fontSize: 14,
    marginLeft:10,
    marginBottom:8,
    marginTop:8
  },
  label: {
    fontSize: 14,
    fontStyle: "italic",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 0,
    color: "black",
    borderBottomWidth: 0.4,
    borderColor: "grey"
  }
});
