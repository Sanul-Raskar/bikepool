import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class SavedHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      InfoView: true,
      savedLocationsView: false,
      address: "",
      lat: 0,
      lng: 0
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    let { height, width } = Dimensions.get("window");
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        {this.state.InfoView && (
          <View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.center}>
                <Image
                  resizeMode="contain"
                  source={require("../../assets/img/home.jpg")}
                  style={styles.image}
                />
                <Text>Looks like you haven't saved any location.</Text>
                <Text style={{ textAlign: "center" }}>
                  You can quickly use saved location {"\n"} while booking your
                  ride.
                </Text>
                <TouchableOpacity>
                  <Text
                    style={styles.button}
                    onPress={() => navigate("AddHome")}
                  >
                    Add Home Location
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        )}

        {this.state.savedLocationsView && (
          <View style={{ backgroundColor: "white", padding: 10, width: width }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  borderColor: "#dadce0",
                  borderRadius: 10,
                  borderWidth: 1,
                  padding: 10
                }}
              >
                <View>
                  <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{ width: "100%", height: 300, alignSelf: "stretch" }}
                    region={{
                      latitude: this.state.lat,
                      longitude: this.state.lng,
                      latitudeDelta: 0.0043,
                      longitudeDelta: 0.0034
                    }}
                  >
                    <MapView.Marker
                      coordinate={{
                        latitude: this.state.lat,
                        longitude: this.state.lng,
                        latitudeDelta: 0.0043,
                        longitudeDelta: 0.0034
                      }}
                      pinColor="red"
                    />
                  </MapView>
                </View>
                <View>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 18, marginTop: 10 }}
                  >
                    Address:
                  </Text>
                  <Text>{this.state.address}</Text>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 18, marginTop: 10 }}
                  >
                    Latitude:
                  </Text>
                  <Text>{this.state.lat}</Text>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 18, marginTop: 10 }}
                  >
                    Longitude:
                  </Text>
                  <Text>{this.state.lng}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.center}>
                <Text style={styles.button}>Edit Home Location</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  image: {
    width: 300,
    height: 300
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    fontSize: 18,
    color: "#1a73e8",
    marginBottom: 50,
    marginTop: 20,
    borderColor: "#1a73e8",
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    textAlign: "center"
  }
});
