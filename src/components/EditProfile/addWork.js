import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
import { InputGroup } from "native-base";
var {
  GooglePlacesAutocomplete
} = require("react-native-google-places-autocomplete");

export default class AddWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlacesList: false,
      WorkLat: 0,
      WorkLng: 0,
      WorkDescription: ""
    };
  }

  render() {
    const screenWidth = Dimensions.get("window").width;

    return (
      <View style={{ width: screenWidth }}>
        <ScrollView>
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
                      marginLeft: 10,
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
          <View style={styles.container}>
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save</Text>
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
    marginTop: 30,
    alignItems: "center"
  },
  inputWrapper: {
    marginLeft: 15,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 2,
    backgroundColor: "#fff",
    borderRadius: 7
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    width: 280,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 20
  },
  saveButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    marginBottom: 14,
    width: 300,
    borderRadius: 24,
    marginTop: 30
  },
  saveButtonText: {
    fontSize: 22,
    textAlign: "center",
    height: 30,
    color: "white",
    fontWeight: "bold"
  }
});
