import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

export default class AddPlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var { height, width } = Dimensions.get("window");
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.center}>
            <Image
              resizeMode="contain"
              source={require("../../assets/img/addPlaces.jpg")}
              style={{ width: width, height: 300}}
            />
            <Text style={{ textAlign: "center" }}>
              Save your Home and Work so that we can quickly suggest you while
              searching for your ride. {"\n\n"} You can skip this step now and save your favourite places later in the profile.
            </Text>
          </View>

          <View style={styles.bottomButtons}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  color: "#1a73e8",
                  borderColor: "#1a73e8",
                  borderRadius: 10,
                  borderWidth: 2,
                  padding: 10,
                  marginTop: 70,
                  marginBottom: 10
                }}
                onPress={() => navigate("Bike")}
              >
                Skip
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.NextButton}
              onPress={() => navigate("AddHomeWork")}
            >
              <Text style={styles.ButtonText}>Next</Text>
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
    backgroundColor: "white",
    paddingHorizontal: 22,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  NextButton: {
    backgroundColor: "#1a73e8",
    borderRadius: 10,
    marginTop: 70,
    marginBottom: 10
  },
  ButtonText: {
    fontSize: 18,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 18
  },
  bottomButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  }
});
