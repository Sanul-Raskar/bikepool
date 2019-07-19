import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { List, ListItem, Left, Right, Separator } from "native-base";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { getCurrentLocation } from "../../../action/rideAction";
import { getloginedUser } from "../../../action/userDataAction";

import { connect } from "react-redux";

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 18.5203062,
      longitude: 73.8543185,
      latitudeDelta: 0.0043,
      longitudeDelta: 0.0034,
      error: null,
      sourceLat: 0,
      sourceLng: 0,
      destinationLat: 0,
      destinationLng: 0
    };
  }

  plotSourceMarker = () => {
    return (
      <MapView.Marker
        coordinate={{
          latitude: this.state.sourceLat,
          longitude: this.state.sourceLng,
          latitudeDelta: 0.0043,
          longitudeDelta: 0.0034
        }}
        pinColor="violet"
      />
    );
  };

  plotDestinationMarker = () => {
    return (
      <MapView.Marker
        coordinate={{
          latitude: this.state.destinationLat,
          longitude: this.state.destinationLng,
          latitudeDelta: 0.0043,
          longitudeDelta: 0.0034
        }}
        pinColor="green"
      />
    );
  };

  componentDidMount() {
    this.fetchUser();
    this.fetchCurrentLocation();
  }

  fetchUser = async () => {
    await this.props.getloginedUser();
  };

  fetchCurrentLocation = () => {
    this.props.getCurrentLocation();
    if (this.props.currentLocation != null) {
      this.setState({
        latitude: this.props.currentLocation.currentLat,
        longitude: this.props.currentLocation.currentLng
      });
    }
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0043,
              longitudeDelta: 0.0034
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                latitudeDelta: 0.0043,
                longitudeDelta: 0.0034
              }}
              pinColor="red"
            />

            {this.plotSourceMarker()}
            {this.plotDestinationMarker()}
          </MapView>

          <View
            style={{
              padding: 22,
              position: "absolute",
              top: 0,
              width: "100%"
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                width: "100%",
                borderRadius: 10,
                borderColor: "#dadce0",
                borderWidth: 2
              }}
            >
              <List>
                <ListItem onPress={() => navigate("Search")}>
                  <Left>
                    <Text style={{ paddingLeft: 14, fontSize: 20 }}>
                      Where To?
                    </Text>
                  </Left>
                  <Right>
                    <FontAwesome5 name="motorcycle" color="black" size={24} />
                  </Right>
                </ListItem>
              </List>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.locateButton}
            onPress={this.fetchCurrentLocation}
          >
            <Text>
              <Icon name="md-locate" color="black" size={38} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  locateButton: {
    position: "absolute",
    bottom: 14,
    right: 14,
    backgroundColor: "white",
    borderRadius: 6
  },

  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  map: {
    ...StyleSheet.absoluteFillObject
  }
});

const mapStateToProps = state => {
  const currentLocation = state.RideReducer.userCurrentLocation;
  return { currentLocation };
};

const mapDispatchToProps = {
  getCurrentLocation,
  getloginedUser
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
