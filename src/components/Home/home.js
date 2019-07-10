import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  AsyncStorage,
  StatusBar
} from "react-native";
import Ride from "./topTabs";
import { createBottomTabNavigator } from "react-navigation";
import { List, ListItem, Left, Right, Separator } from "native-base";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import "../global";
HEADER_MAX_HEIGHT = 100;
HEADER_MIN_HEIGHT = 60;
PROFILE_IMAGE_MAX_HEIGHT = 100;
PROFILE_IMAGE_MIN_HEIGHT = 60;

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 18.52043,
      longitude: 73.856743,
      latitudeDelta: 0.0043,
      longitudeDelta: 0.0034,
      error: null,
      sourceLat: global.SourceLatitude,
      sourceLng: global.SourceLongitude,
      destinationLat: global.DestinationLatitude,
      destinationLng: global.DestinationLongitude
    };
  }

  getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      error => {
        this.setState({ error: error.message });
        console.log(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 7000,
        maximumAge: 10000
      }
    );
  };

  plotSourceMarker = () => {
    if (isSourceMarker) {
      console.log(this.state.sourceLat);
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
    }
  };

  plotDestinationMarker = () => {
    if (isDestinationMarker) {
      console.log(this.state.destinationLat);
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
    }
  };
  /*
  componentWillMount() {
    this.getCurrentLocation();
  }
*/

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
            onPress={this.getCurrentLocation}
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

export class Rides extends Component {
  render() {
    return <Ride />;
  }
}

export class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollY: new Animated.Value(0) };
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    const { navigate } = this.props.navigation;

    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: "clamp"
    });

    const profileImageHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
      extrapolate: "clamp"
    });

    const profileImageMarginTop = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [
        HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
        HEADER_MAX_HEIGHT + 6
      ],
      extrapolate: "clamp"
    });

    const headerZIndex = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 22],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });

    const headerTitleBottom = this.state.scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 6 + PROFILE_IMAGE_MIN_HEIGHT,
        HEADER_MAX_HEIGHT -
          HEADER_MIN_HEIGHT +
          6 +
          PROFILE_IMAGE_MIN_HEIGHT +
          34
      ],
      outputRange: [-22, -20, -14, 10],
      extrapolate: "clamp"
    });

    const smallTitle = {
      fontSize: 22,
      fontWeight: "bold",
      textShadowColor: "white",
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 0,
      color: this.state.scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: ["white", "black"]
      })
    };

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "white",
            height: headerHeight,
            zIndex: headerZIndex,
            alignItems: "center"
          }}
        >
          <Animated.View
            style={{
              color: "white",
              position: "absolute",
              bottom: headerTitleBottom
            }}
          >
            <Animated.Text style={smallTitle}>Sanul Raskar</Animated.Text>
          </Animated.View>
        </Animated.View>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ])}
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <Animated.View
            style={{
              height: profileImageHeight,
              width: profileImageHeight,
              borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
              borderColor: "black",
              borderWidth: 1,
              overflow: "hidden",
              marginTop: profileImageMarginTop,
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <Image
              source={{
                uri:
                  "https://facebook.github.io/react-native/docs/assets/favicon.png"
              }}
              style={{
                flex: 1,
                width: null,
                height: null
              }}
            />
          </Animated.View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 32,
                marginLeft: "auto",
                marginRight: "auto",
                color: "black"
              }}
            >
              Sanul Raskar
            </Text>
          </View>
          <View style={{ height: 20 }} />
          <View style={{ backgroundColor: "white" }}>
            <List style={{ backgroundColor: "white" }}>
              <Separator bordered>
                <Text>Profile</Text>
              </Separator>

              <ListItem onPress={() => navigate("ViewProfile")}>
                <Left>
                  <MaterialIcon
                    name="account-circle"
                    color="#1a73e8"
                    size={24}
                  />
                  <Text style={styles.listText}>View Profile</Text>
                </Left>
                <Right>
                  <MaterialIcon
                    name="navigate-next"
                    color="#1a73e8"
                    size={24}
                  />
                </Right>
              </ListItem>
              <ListItem onPress={() => navigate("EditProfile")}>
                <Left>
                  <MaterialIcon name="edit" color="#1a73e8" size={24} />
                  <Text style={styles.listText}>Edit Profile</Text>
                </Left>
                <Right>
                  <MaterialIcon
                    name="navigate-next"
                    color="#1a73e8"
                    size={24}
                  />
                </Right>
              </ListItem>
              <ListItem onPress={() => navigate("ChangePassword")}>
                <Left>
                  <MaterialIcon name="vpn-key" color="#1a73e8" size={24} />
                  <Text style={styles.listText}>Change Password</Text>
                </Left>
                <Right>
                  <MaterialIcon
                    name="navigate-next"
                    color="#1a73e8"
                    size={24}
                  />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <FontAwesome5 name="motorcycle" color="#1a73e8" size={24} />
                  <Text style={styles.listText}>Bike Information</Text>
                </Left>
                <Right>
                  <MaterialIcon
                    name="navigate-next"
                    color="#1a73e8"
                    size={24}
                  />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <MaterialIcon name="delete" color="red" size={24} />
                  <Text style={styles.listText}>Delete My Account</Text>
                </Left>
                <Right>
                  <MaterialIcon
                    name="navigate-next"
                    color="#1a73e8"
                    size={24}
                  />
                </Right>
              </ListItem>

              <Separator bordered>
                <Text>Favorites</Text>
              </Separator>
              <ListItem onPress={() => navigate("SavedHome")}>
                <Left>
                  <MaterialIcon name="home" color="#1a73e8" size={24} />
                  <Text style={styles.listText}>Add Home</Text>
                </Left>
                <Right>
                  <MaterialIcon
                    name="navigate-next"
                    color="#1a73e8"
                    size={24}
                  />
                </Right>
              </ListItem>

              <ListItem onPress={() => navigate("SavedWork")}>
                <Left>
                  <MaterialIcon name="work" color="#1a73e8" size={24} />
                  <Text style={styles.listText}>Add Work</Text>
                </Left>
                <Right>
                  <MaterialIcon
                    name="navigate-next"
                    color="#1a73e8"
                    size={24}
                  />
                </Right>
              </ListItem>

              <Separator bordered>
                <Text>App</Text>
              </Separator>
              <ListItem>
                <Left>
                  <MaterialIcon name="info" color="#1a73e8" size={24} />
                  <Text style={styles.listText}>About</Text>
                </Left>
                <Right>
                  <MaterialIcon
                    name="navigate-next"
                    color="#1a73e8"
                    size={24}
                  />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <MaterialIcon name="feedback" color="#1a73e8" size={24} />
                  <Text style={styles.listText}>App Feedback</Text>
                </Left>
                <Right>
                  <MaterialIcon
                    name="navigate-next"
                    color="#1a73e8"
                    size={24}
                  />
                </Right>
              </ListItem>

              <Separator bordered>
                <Text>dev screens</Text>
              </Separator>
              <ListItem onPress={() => navigate("Loader")}>
                <Left>
                  <Text style={styles.listText}>Loader</Text>
                </Left>
              </ListItem>
              <ListItem onPress={() => navigate("RiderBiker")}>
                <Left>
                  <Text style={styles.listText}>BikerRider</Text>
                </Left>
              </ListItem>
              <ListItem onPress={() => navigate("FeedBack")}>
                <Left>
                  <Text style={styles.listText}>Feedback</Text>
                </Left>
              </ListItem>

              <Separator bordered />
              <ListItem onPress={this._signOutAsync}>
                <Left>
                  <FontAwesome5 name="sign-out-alt" color="red" size={24} />
                  <Text style={styles.listText}>Sign Out</Text>
                </Left>
              </ListItem>
            </List>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-home" color={tintColor} size={24} />
        )
      }
    },

    Rides: {
      screen: Rides,
      navigationOptions: {
        tabBarLabel: "Rides",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome5 name="motorcycle" color={tintColor} size={24} />
        )
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-settings" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#1a73e8",
      inactiveTintColor: "#6a707c"
    }
  }
);

const styles = StyleSheet.create({
  toggleSwitchLabels: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black"
  },

  listText: {
    paddingLeft: 12,
    fontSize: 16,
    color: "black"
  },

  listTextDanger: {
    paddingLeft: 12,
    fontSize: 18,
    color: "red"
  },
  listSubTextLabel: {
    paddingLeft: 12,
    fontSize: 16,
    color: "black",
    fontWeight: "bold"
  },
  listSubText: {
    paddingLeft: 12,
    fontSize: 16,
    color: "black"
  },

  myText: {
    margin: 60,
    justifyContent: "center",
    fontSize: 22
  },
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
