import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { connect } from "react-redux";
import { getHome, deleteHome } from "../../../action/userDataAction";
import Modal from "react-native-modal";

export class SavedHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      InfoView: true,
      savedLocationsView: false,
      address: "",
      lat: 0,
      lng: 0,
      modalVisible: false,
      visibleModal: "bottom"
    };
  }

  showInfoView = () => {
    return (
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
              You can quickly use saved location {"\n"} while booking your ride.
            </Text>
            <TouchableOpacity>
              <Text style={styles.button} onPress={() => navigate("AddHome")}>
                Add Home Location
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };

  showModal = () => {
    return (
      <View>
        <Modal
          isVisible={this.state.visibleModal === "bottom"}
          onSwipeComplete={() => this.setState({ visibleModal: null })}
          swipeDirection={["down"]}
          style={styles.bottomModal}
        >
          <View
            style={{
              backgroundColor: "#1a73e8",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingVertical: 10
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              Confirm
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "white",
              padding: 22,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "rgba(0, 0, 0, 0.1)"
            }}
          >
            <Text>Are you sure you want to delete saved home location?</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "white",
                marginTop: 20
              }}
            >
              <TouchableOpacity
                onPress={() => this.setState({ modalVisible: false })}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#1a73e8",
                    marginBottom: 10,
                    marginTop: 20,
                    borderColor: "#1a73e8",
                    borderRadius: 10,
                    borderWidth: 2,
                    padding: 10,
                    textAlign: "center",
                    marginHorizontal: 30
                  }}
                >
                  No
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  const userID = "1";
                  this.props.deleteHome(userID);
                }}
                style={{
                  backgroundColor: "#1a73e8",
                  marginBottom: 10,
                  borderRadius: 10,
                  marginTop: 20,
                  marginHorizontal: 30
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "white",
                    paddingTop: 10,
                    paddingBottom: 12,
                    paddingHorizontal: 18,
                    textAlign: "center"
                  }}
                >
                  Yes
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  showLoading = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white"
        }}
      >
        <ActivityIndicator size="large" color="#1a73e8" />
      </View>
    );
  };

  showSavedHome = () => {
    console.log("render");
    const { navigate } = this.props.navigation;
    let { height, width } = Dimensions.get("window");
    return (
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
                style={{ width: "100%", height: 260, alignSelf: "stretch" }}
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
              <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 10 }}>
                Address:
              </Text>
              <Text>{this.state.address}</Text>
              <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 10 }}>
                Latitude:
              </Text>
              <Text>{this.state.lat}</Text>
              <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 10 }}>
                Longitude:
              </Text>
              <Text>{this.state.lng}</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-evenly"
            }}
          >
            <TouchableOpacity onPress={this.deleteHomeLocation}>
              <Text
                style={{
                  fontSize: 18,
                  color: "#1a73e8",
                  marginBottom: 50,
                  marginTop: 60,
                  borderColor: "#1a73e8",
                  borderRadius: 10,
                  borderWidth: 2,
                  padding: 10,
                  textAlign: "center"
                }}
              >
                Delete Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#1a73e8",
                marginBottom: 50,
                borderRadius: 10,
                marginTop: 60
              }}
              onPress={() => {
                navigate("AddHome");
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                  paddingVertical: 10,
                  paddingHorizontal: 18,
                  textAlign: "center"
                }}
              >
                Edit Home
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };

  fetchData = async () => {
    const userID = "1";
    await this.props.getHome(userID);
    if (this.props.home != null && this.props.home.length != 0) {
      let data = this.props.home[0];
      this.setState({
        InfoView: false,
        savedLocationsView: true,
        lat: Number(data.Lat),
        lng: Number(data.Lng)
      });
    } else {
      this.setState({
        InfoView: true,
        savedLocationsView: false
      });
    }
  };

  deleteHomeLocation = () => {
    this.setState({
      modalVisible: true
    });
  };

  setView = () => {
    if (this.props.loading) {
      return this.showLoading();
    } else {
      if (this.state.InfoView) {
        return this.showInfoView();
      } else {
        return this.showSavedHome();
      }
    }
  };
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        {this.setView()}
        {this.state.modalVisible && this.showModal()}
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
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  }
});

const mapStateToProps = state => {
  const home = state.HomeReducer.homeData;
  const loading = state.HomeReducer.loading;
  return {
    home,
    loading
  };
};

const mapDispatchToProps = {
  getHome,
  deleteHome
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedHome);
