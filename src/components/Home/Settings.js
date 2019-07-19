import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  AsyncStorage,
  StatusBar
} from "react-native";
import { List, ListItem, Left, Right, Separator } from "native-base";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { connect } from "react-redux";
import UserAvatar from "react-native-user-avatar";

HEADER_MAX_HEIGHT = 100;
HEADER_MIN_HEIGHT = 60;
PROFILE_IMAGE_MAX_HEIGHT = 100;
PROFILE_IMAGE_MIN_HEIGHT = 60;

export class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
      name: "A B",
      avatarColor: "#fff"
    };
  }

  getName = () => {
    const user = this.props.user.userData;
    if (user != null) {
      const username = user.firstname + " " + user.lastname;
      this.setState({
        name: username,
        avatarColor: "#000"
      });
    }
  };

  componentWillReceiveProps(nextProps) {
    const user = nextProps.user.userData;
    if (user != null) {
      const username = user.firstname + " " + user.lastname;
      this.setState({
        name: username,
        avatarColor: "#000"
      });
    }
  }

  componentDidMount() {
    this.getName();
  }
  _signOutAsync = async () => {
    try {
      await AsyncStorage.removeItem("userToken");
      this.props.navigation.navigate("AuthLoading");
    } catch (error) {
      console.log(error);
    }
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
            <UserAvatar
              size="98"
              name={this.state.name}
              color={this.state.avatarColor}
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
              <ListItem onPress={() => navigate("ViewBikeInfo")}>
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
  }
});

const mapStateToProps = state => {
  const user = state.ViewProfile;
  return {
    user
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
