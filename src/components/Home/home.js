import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated
} from "react-native";
import Ride from "./topTabs";
import { createBottomTabNavigator } from "react-navigation";
import {
  List,
  ListItem,
  Left,
  Body,
  Right,
  Separator,
  Card,
  CardItem
} from "native-base";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import ToggleSwitch from "toggle-switch-react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SearchBox from "../Search/AutoComplete";
import "../global";
HEADER_MAX_HEIGHT = 100;
HEADER_MIN_HEIGHT = 60;
PROFILE_IMAGE_MAX_HEIGHT = 100;
PROFILE_IMAGE_MIN_HEIGHT = 60;

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnDefaultToggleSwitch: true
    };
  }

  render() {
    return (
      <View>
        <Card>
          <CardItem>
            <Left>
              <Text style={styles.toggleSwitchLabels}>Offer Ride</Text>
            </Left>
            <Body>
              <ToggleSwitch
                isOn={this.state.isOnDefaultToggleSwitch}
                onColor="rgb(51, 51, 51)"
                offColor="rgb(51, 51, 51)"
                size="large"
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
        <ScrollView>
          <SearchBox />
        </ScrollView>
      </View>
    );
  }
}

export class Map extends Component {
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

    this.getCurrentLocation = this.getCurrentLocation.bind(this);
  }
  getCurrentLocation() {
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
        alert(error.message);
        console.log(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 7000,
        maximumAge: 10000
      }
    );
  }

  plotSourceMarker() {
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
  }

  plotDestinationMarker() {
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
  }

  componentWillMount() {
    this.getCurrentLocation();
  }

  render() {
    return (
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

        <TouchableOpacity
          style={styles.locateButton}
          onPress={this.getCurrentLocation}
        >
          <Text>
            <Icon name="md-locate" color="black" size={38} />
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export class Rides extends Component {
  render() {
    return <Ride />;
  }
}

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollY: new Animated.Value(0) };
  }

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

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "black",
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
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: "white",
                textShadowColor: "white",
                textShadowOffset: { width: 0, height: 0 },
                textShadowRadius: 0
              }}
            >
              Sanul Raskar
            </Text>
          </Animated.View>
        </Animated.View>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ])}
          style={{ flex: 1 }}
        >
          <Animated.View
            style={{
              height: profileImageHeight,
              width: profileImageHeight,
              borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
              borderColor: "white",
              borderWidth: 3,
              overflow: "hidden",
              marginTop: profileImageMarginTop,
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <Image
              source={require("./sanul.jpeg")}
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
          <View style={{ height: 30 }} />
          <View style={{ backgroundColor: "white" }}>
            <List style={{ backgroundColor: "white" }}>
              <ListItem
                onPress={() => navigate("EditProfile")}
                style={{ borderBottomWidth: 0 }}
              >
                <Left>
                  <MaterialIcon name="edit" color="black" size={24} />
                  <Text style={styles.listText}>Edit Profile</Text>
                </Left>
                <Right>
                  <Icon name="ios-arrow-dropright" color="black" size={24} />
                </Right>
              </ListItem>
              <ListItem style={{ borderBottomWidth: 0 }}>
                <Body>
                  <Text style={styles.listSubTextLabel}>Name</Text>
                  <Text style={styles.listSubText}>Sanul Raskar</Text>
                </Body>
              </ListItem>
              <ListItem style={{ borderBottomWidth: 0 }}>
                <Body>
                  <Text style={styles.listSubTextLabel}>Phone</Text>
                  <Text style={styles.listSubText}>7350142164</Text>
                </Body>
              </ListItem>
              <ListItem style={{ borderBottomWidth: 0 }}>
                <Body>
                  <Text style={styles.listSubTextLabel}>Email</Text>
                  <Text style={styles.listSubText}>sanulraskar@gmail.com</Text>
                </Body>
              </ListItem>
              <Separator bordered>
                <Text>Favorites</Text>
              </Separator>
              <ListItem style={{ borderBottomWidth: 0 }}>
                <Left>
                  <MaterialIcon name="home" color="black" size={24} />
                  <Text style={styles.listText}>Add Home</Text>
                </Left>
                <Right>
                  <Icon name="ios-arrow-dropright" color="black" size={24} />
                </Right>
              </ListItem>
              <ListItem>
                <Body>
                  <Text style={styles.listSubText}>
                    Narveer Tanaji Housing Society Ramling-Shirur Rd Shivrashka
                    Colony Shirur,Maharashtra 412210
                  </Text>
                </Body>
              </ListItem>
              <ListItem style={{ borderBottomWidth: 0 }}>
                <Left>
                  <MaterialIcon name="work" color="black" size={24} />
                  <Text style={styles.listText}>Add Work</Text>
                </Left>
                <Right>
                  <Icon name="ios-arrow-dropright" color="black" size={24} />
                </Right>
              </ListItem>
              <ListItem>
                <Body>
                  <Text style={styles.listSubText}>
                    VIIT College Of Engineering,Yashodhan Society,Kapil
                    Nagar,Kondhwa Budruk,Pune,Maharashtra 411048
                  </Text>
                </Body>
              </ListItem>
              <Separator bordered />
              <ListItem>
                <Text style={styles.listText}>Sign Out</Text>
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
    Map: {
      screen: Map,
      navigationOptions: {
        tabBarLabel: "Maps",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-map" color={tintColor} size={24} />
        )
      }
    },

    Rides: {
      screen: Rides,
      navigationOptions: {
        tabBarLabel: "Rides",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-car" color={tintColor} size={24} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome5 name="user-circle" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "grey"
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
    fontSize: 18,
    color: "black"
  },

  listSubTextLabel: {
    paddingLeft: 12,
    fontSize: 16,
    color: "black"
  },
  listSubText: {
    paddingLeft: 12,
    fontSize: 14,
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
