import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Animated
} from "react-native";
import Ride from "./topTabs";
import { createBottomTabNavigator } from "react-navigation";
import { Container, Header, Content, List, ListItem } from "native-base";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Icon from "react-native-vector-icons/Ionicons";
import SettingsScreen from "../Settings/setting";
import LoginScreen from "../Login/login";
import SignUpScreen from "../SignUp/signup";

HEADER_MAX_HEIGHT = 120;
HEADER_MIN_HEIGHT = 70;
PROFILE_IMAGE_MAX_HEIGHT = 80;
PROFILE_IMAGE_MIN_HEIGHT = 40;

export class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.myText}>
          Home. Here will be Map and App will ask user whether he want to get
          ride or give ride.
        </Text>
      </View>
    );
  }
}

export class Map extends Component {

  render() {
    const region = {
      latitude: 18.466400,
      longitude: 73.866478,
      latitudeDelta: 0.0043,
      longitudeDelta: 0.0034
    };

    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={region}
        >
          <MapView.Marker coordinate={region} pinColor="red" />
        </MapView>
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

  render() {
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
        HEADER_MAX_HEIGHT + 5
      ],
      extrapolate: "clamp"
    });

    const headerZIndex = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });

    const headerTitleBottom = this.state.scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
        HEADER_MAX_HEIGHT -
          HEADER_MIN_HEIGHT +
          5 +
          PROFILE_IMAGE_MIN_HEIGHT +
          26
      ],
      outputRange: [-20, -20, -20, 0],
      extrapolate: "clamp"
    });

    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "lightskyblue",
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
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "white" }}>
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
                fontSize: 26,
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              Sanul Raskar
            </Text>
          </View>
          <View style={{ height: 1000 }}>
            <List>
              <ListItem>
                <Text>Simon Mignolet</Text>
              </ListItem>
              <ListItem>
                <Text>Nathaniel Clyne</Text>
              </ListItem>
              <ListItem>
                <Text>Dejan Lovren</Text>
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
      activeTintColor: "blue",
      inactiveTintColor: "grey"
    }
  }
);

const styles = StyleSheet.create({
  myText: {
    margin: 60,
    justifyContent: "center",
    fontSize: 22
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
