import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar
} from "react-native";

import { InputGroup } from "native-base";
var {
  GooglePlacesAutocomplete
} = require("react-native-google-places-autocomplete");

export default class AddHomeWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlacesList: false,
      WorkLat: 0,
      WorkLng: 0,
      WorkDescription: "",
      HomeLat: 0,
      HomeLng: 0,
      HomeDescription: ""
    };
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1, backgroundColor: "white", padding: 22 }}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}
          >
            Add Home
          </Text>
          <View style={styles.inputWrapper}>
            <TouchableOpacity>
              <InputGroup>
                <GooglePlacesAutocomplete
                  listViewDisplayed={this.state.showPlacesList}
                  textInputProps={{
                    onFocus: () => this.setState({ showPlacesList: true }),
                    onBlur: () => this.setState({ showPlacesList: false })
                  }}
                  placeholder="Search for your Home"
                  minLength={2}
                  autoFocus={false}
                  returnKeyType={"default"}
                  fetchDetails={true}
                  onPress={(data, details = null) => {
                    this.setState({ HomeLat: details.geometry.location.lat });
                    this.setState({ HomeLng: details.geometry.location.lng });
                    console.log(this.state.HomeLat);
                    console.log(this.state.HomeLng);
                  }}
                  getDefaultValue={() => {
                    return "";
                  }}
                  query={{
                    key: "Your Google maps API Key Here",
                    language: "en",
                    types: "(cities)" // default: 'geocode'
                  }}
                  styles={{
                    description: {
                      fontWeight: "bold"
                    },
                    predefinedPlacesDescription: {
                      color: "#1faadb"
                    },
                    textInputContainer: {
                      fontSize: 14,
                      marginBottom: 8,
                      marginTop: 8,
                      backgroundColor: "white",
                      borderBottomWidth: 0,
                      borderTopWidth: 0
                    }
                  }}
                  currentLocation={true}
                  currentLocationLabel="Current location"
                  nearbyPlacesAPI="GooglePlacesSearch"
                  GoogleReverseGeocodingQuery={{}}
                  GooglePlacesSearchQuery={{
                    rankby: "distance",
                    types: "food"
                  }}
                  filterReverseGeocodingByTypes={[
                    "locality",
                    "administrative_area_level_3"
                  ]}
                  predefinedPlacesAlwaysVisible={false}
                />
              </InputGroup>
            </TouchableOpacity>
          </View>
          <View style={{ height: 50 }} />
          <Text
            style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}
          >
            {"\n"}Add Work
          </Text>
          <View style={styles.inputWrapper}>
            <TouchableOpacity>
              <InputGroup>
                <GooglePlacesAutocomplete
                  listViewDisplayed={this.state.showPlacesList}
                  textInputProps={{
                    onFocus: () => this.setState({ showPlacesList: true }),
                    onBlur: () => this.setState({ showPlacesList: false })
                  }}
                  placeholder="Search for your Work"
                  minLength={2}
                  autoFocus={false}
                  returnKeyType={"default"}
                  fetchDetails={true}
                  onPress={(data, details = null) => {
                    this.setState({ WorkLat: details.geometry.location.lat });
                    this.setState({ WorkLng: details.geometry.location.lng });
                    console.log(this.state.WorkLat);
                    console.log(this.state.WorkLng);
                  }}
                  getDefaultValue={() => {
                    return "";
                  }}
                  query={{
                    key: "Your Google maps API Key Here",
                    language: "en",
                    types: "(cities)" // default: 'geocode'
                  }}
                  styles={{
                    description: {
                      fontWeight: "bold"
                    },
                    predefinedPlacesDescription: {
                      color: "#1faadb"
                    },
                    textInputContainer: {
                      fontSize: 14,
                      marginBottom: 8,
                      marginTop: 8,
                      backgroundColor: "white",
                      borderBottomWidth: 0,
                      borderTopWidth: 0
                    }
                  }}
                  currentLocation={true}
                  currentLocationLabel="Current location"
                  nearbyPlacesAPI="GooglePlacesSearch"
                  GoogleReverseGeocodingQuery={{}}
                  GooglePlacesSearchQuery={{
                    rankby: "distance",
                    types: "food"
                  }}
                  filterReverseGeocodingByTypes={[
                    "locality",
                    "administrative_area_level_3"
                  ]}
                  predefinedPlacesAlwaysVisible={false}
                />
              </InputGroup>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomButtons}>
            <TouchableOpacity onPress={() => navigate("AddPlaces")}>
              <Text
                style={{
                  fontSize: 18,
                  color: "#1a73e8",
                  marginBottom: 50,
                  marginTop: 60,
                  borderColor: "#1a73e8",
                  borderRadius: 10,
                  borderWidth: 2,
                  padding: 10
                }}
                onPress={() => navigate("Bike")}
              >
                Skip
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SaveButton}>
              <Text style={styles.ButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "white"
  },
  inputWrapper: {
    marginTop: 10,
    marginBottom: 2,
    backgroundColor: "#fff",
    borderRadius: 7,
    borderColor: "#dadce0",
    borderWidth: 2
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 20
  },
  SaveButton: {
    backgroundColor: "#1a73e8",
    marginBottom: 50,
    borderRadius: 10,
    marginTop: 60
  },
  ButtonText: {
    fontSize: 18,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 18
  },
  bottomButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
