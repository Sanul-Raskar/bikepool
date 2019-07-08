import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar
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
    return (
      <View style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
        <ScrollView showsVerticalScrollIndicator={false}>
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
          <View style={styles.container}>
            <TouchableOpacity
              style={{
                backgroundColor: "#1a73e8",
                marginBottom: 50,
                borderRadius: 10,
                marginTop: 30
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                  paddingVertical: 10,
                  paddingHorizontal: 18
                }}
              >
                Save
              </Text>
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
    marginLeft: 15,
    marginRight: 10,
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
  }
});
