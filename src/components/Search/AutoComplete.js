import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
  Image,
  Picker
} from "react-native";
var {
  GooglePlacesAutocomplete
} = require("react-native-google-places-autocomplete");
import { InputGroup } from "native-base";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import "../global";

export default class GPlacesDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSourcePlacesList: false,
      showDestinationPlacesList: false,
      sourceLat: 0,
      sourceLng: 0,
      destinationLat: 0,
      destinationLng: 0,
      isScooterSelected: false,
      isBikeSelected: false,
      isPowerBikeSelected: false,
      scooterBorderColor: "#dadce0",
      bikeBorderColor: "#dadce0",
      powerBikeBorderColor: "#dadce0",
      gender: ""
    };
  }

  toggleBike = () => {
    if (this.state.isBikeSelected) {
      this.setState({ bikeBorderColor: "#dadce0", isBikeSelected: false });
    } else {
      this.setState({ bikeBorderColor: "#1a73e8", isBikeSelected: true });
    }
  };

  toggleScooter = () => {
    if (this.state.isScooterSelected) {
      this.setState({
        scooterBorderColor: "#dadce0",
        isScooterSelected: false
      });
    } else {
      this.setState({ scooterBorderColor: "#1a73e8", isScooterSelected: true });
    }
  };

  togglePowerBike = () => {
    if (this.state.isPowerBikeSelected) {
      this.setState({
        powerBikeBorderColor: "#dadce0",
        isPowerBikeSelected: false
      });
    } else {
      this.setState({
        powerBikeBorderColor: "#1a73e8",
        isPowerBikeSelected: true
      });
    }
  };

  source_destination_coordinates = () => {
    global.isSourceMarker = true;
    global.isDestinationMarker = true;
    global.SourceLatitude = this.state.sourceLat;
    global.SourceLongitude = this.state.sourceLng;
    global.DestinationLatitude = this.state.destinationLat;
    global.DestinationLongitude = this.state.destinationLat;
  };

  render() {
    const screenWidth = Dimensions.get("window").width;
    const homePlace = {
      description: "Home",
      geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }
    };
    const workPlace = {
      description: "Work",
      geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }
    };

    return (
      <View style={{ width: screenWidth, backgroundColor: "white" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.inputWrapper}>
            <InputGroup>
              <MaterialIcon name="search" size={18} color="black" />
              <Text style={styles.label}>Source</Text>
            </InputGroup>
            <TouchableOpacity>
              <InputGroup>
                <GooglePlacesAutocomplete
                  listViewDisplayed={this.state.showSourcePlacesList}
                  textInputProps={{
                    onFocus: () =>
                      this.setState({ showSourcePlacesList: true }),
                    onBlur: () => this.setState({ showSourcePlacesList: false })
                  }}
                  placeholder="Choose pick-off location"
                  minLength={2}
                  autoFocus={false}
                  returnKeyType={"default"}
                  fetchDetails={true}
                  onPress={(data, details = null) => {
                    this.setState({ sourceLat: details.geometry.location.lat });
                    this.setState({ sourceLng: details.geometry.location.lng });
                    console.log(this.state.sourceLat);
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
                  predefinedPlaces={[homePlace, workPlace]}
                  predefinedPlacesAlwaysVisible={true}
                />
              </InputGroup>
            </TouchableOpacity>
          </View>

          <View style={styles.secondInputWrapper}>
            <InputGroup>
              <MaterialIcon name="search" size={18} color="black" />
              <Text style={styles.label}>Destination</Text>
            </InputGroup>
            <TouchableOpacity>
              <InputGroup>
                <GooglePlacesAutocomplete
                  listViewDisplayed={this.state.showDestinationPlacesList}
                  textInputProps={{
                    onFocus: () =>
                      this.setState({ showDestinationPlacesList: true }),
                    onBlur: () =>
                      this.setState({ showDestinationPlacesList: false })
                  }}
                  placeholder="Choose drop-off location"
                  minLength={2}
                  autoFocus={false}
                  fetchDetails={true}
                  onPress={(data, details = null) => {
                    this.setState({
                      destinationLat: details.geometry.location.lat
                    });
                    this.setState({
                      destinationLng: details.geometry.location.lng
                    });
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
                  currentLocation={false}
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
                  predefinedPlaces={[homePlace, workPlace]}
                  predefinedPlacesAlwaysVisible={true}
                />
              </InputGroup>
            </TouchableOpacity>
          </View>

          <Text style={{ paddingHorizontal: 22, paddingTop: 14 }}>
            Choose your preferred vehicle. You may choose multiple types
          </Text>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 22,
              textAlign: "center",
              paddingTop: 10
            }}
          >
            <TouchableOpacity onPress={this.toggleScooter}>
              <View
                style={{
                  borderColor: this.state.scooterBorderColor,
                  borderRadius: 10,
                  borderWidth: 1.5,
                  padding: 10
                }}
              >
                <Image
                  resizeMode="contain"
                  style={styles.image}
                  source={require("../../assets/img/bike/scooter.png")}
                />
                <Text style={{ textAlign: "center" }}>Scooter</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.toggleBike}>
              <View
                style={{
                  borderColor: this.state.bikeBorderColor,
                  borderRadius: 10,
                  borderWidth: 1.5,
                  padding: 10
                }}
              >
                <Image
                  resizeMode="contain"
                  style={styles.image}
                  source={require("../../assets/img/bike/bike.png")}
                />
                <Text style={{ textAlign: "center" }}>Bike</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.togglePowerBike}>
              <View
                style={{
                  borderColor: this.state.powerBikeBorderColor,
                  borderRadius: 10,
                  borderWidth: 1.5,
                  padding: 10
                }}
              >
                <Image
                  resizeMode="contain"
                  style={styles.image}
                  source={require("../../assets/img/bike/powerBike.png")}
                />
                <Text style={{ textAlign: "center" }}>Power Bike</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 22 }}>
            <Text
              style={{
                fontSize: 16,
                marginTop: 8,
                color: this.state.gender_font_color,
                zIndex: 10,
                backgroundColor: "white",
                width: 170,
                marginBottom: 0,
                marginLeft: 8
              }}
            >
              I'm Comfortable with:
            </Text>
            <View
              style={{
                borderWidth: 1.5,
                borderRadius: 8,
                marginBottom: 8,
                borderColor: "#dadce0",
                marginTop: -8
              }}
            >
              <Picker
                selectedValue={this.state.gender}
                mode="dialog"
                style={{ height: 50, width: "100%" }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ gender: itemValue })
                }
              >
                <Picker.Item label="Select" value="" />
                <Picker.Item label="Only Male" value="male" />
                <Picker.Item label="Only Female" value="female" />
                <Picker.Item label="Comfortable with anyone" value="both" />
              </Picker>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20
            }}
          >
            <TouchableOpacity>
              <Text style={styles.CancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.FindButton}
              onPress={() => this.source_destination_coordinates()}
            >
              <Text style={styles.ButtonText}>Find Ride</Text>
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
    backgroundColor: "#fff"
  },

  inputWrapper: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 2,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#dadce0",
    borderWidth: 2
  },
  secondInputWrapper: {
    marginHorizontal: 20,
    marginTop: 14,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#dadce0",
    borderWidth: 2
  },
  inputSearch: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 8,
    marginTop: 8
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
  },
  FindButton: {
    backgroundColor: "#1a73e8",
    marginBottom: 20,
    borderRadius: 10,
    marginTop: 10
  },
  ButtonText: {
    fontSize: 18,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 18,
    textAlign: "center"
  },

  CancelButtonText: {
    fontSize: 18,
    color: "#1a73e8",
    marginBottom: 20,
    marginTop: 10,
    borderColor: "#1a73e8",
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    textAlign: "center"
  },
  image: {
    width: 70,
    height: 70
  }
});
