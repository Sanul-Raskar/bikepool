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
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class BikeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfoView: true,
      showVehicleView: true
    };
  }

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

  InfoView = () => {
    let { width } = Dimensions.get("window");
    const { navigate } = this.props.navigation;

    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.center}>
            <Image
              resizeMode="contain"
              source={require("../../assets/img/bikeInfo.jpg")}
              style={{ width: width, height: 350 }}
            />
            <Text style={{ fontSize: 18 }}>
              Looks like you haven't saved any bike.
            </Text>
            <TouchableOpacity>
              <Text style={styles.button}>
                Add Bike
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };

  showSavedBikes = () =>{
    return(
        <View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View>
        
        </View>
        </ScrollView>
        </View>
    )
  }
  fetchData = () => {};

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        {this.InfoView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
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
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BikeInfo);
