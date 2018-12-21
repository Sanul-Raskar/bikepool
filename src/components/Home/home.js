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
  Animated,
  Button
} from "react-native";
import Ride from "./topTabs";
import { createBottomTabNavigator } from "react-navigation";
import { List, ListItem, Left, Body, Right, Separator } from "native-base";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SearchBox from '../Search/search'
import LinearGradient from "react-native-linear-gradient";

HEADER_MAX_HEIGHT = 100;
HEADER_MIN_HEIGHT = 60;
PROFILE_IMAGE_MAX_HEIGHT = 100;
PROFILE_IMAGE_MIN_HEIGHT = 60;

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
      latitude: 18.4664,
      longitude: 73.866478,
      latitudeDelta: 0.0043,
      longitudeDelta: 0.0034
    };

    return (
      <View style={styles.container}>
        <MapView provider={PROVIDER_GOOGLE} style={styles.map} region={region}>
          <MapView.Marker coordinate={region} pinColor="red" />
        </MapView> 
        <SearchBox/>
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
                color:"black"
              }}
            >
              Sanul Raskar
            </Text>
          </View>
          <View style={{ height: 30 }} />
          <View style={{ backgroundColor: "white" }}>
            <List style={{ backgroundColor: "white" }}>
              <ListItem
                onPress={() => alert("Hello")}
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
              <ListItem>
                <Left>
                  <MaterialIcon name="home" color="black" size={24} />
                  <Text style={styles.listText}>Add Home</Text>
                </Left>
                <Right>
                  <Icon name="ios-arrow-dropright" color="black" size={24} />
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <MaterialIcon name="work" color="black" size={24} />
                  <Text style={styles.listText}>Add Work</Text>
                </Left>
                <Right>
                  <Icon name="ios-arrow-dropright" color="black" size={24} />
                </Right>
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
  listText: {
    paddingLeft: 12,
    fontSize: 18,
    color:'black'
  },

  listSubTextLabel: {
    paddingLeft: 12,
    fontSize: 16,
    color:'black'
  },
  listSubText: {
    paddingLeft: 12,
    fontSize: 14,
    color:'black'
  },

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
