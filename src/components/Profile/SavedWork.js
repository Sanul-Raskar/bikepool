import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from "react-native";

export default class SavedHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.center}>
            <Image
              resizeMode="contain"
              source={require("../../assets/img/work.jpg")}
              style={styles.image}
            />
            <Text>Looks like you haven't saved any location.</Text>
            <Text style={{textAlign:"center"}}>
              You can quickly use saved location {"\n"} while booking your ride.
            </Text>
            <TouchableOpacity>
              <Text style={styles.button} onPress={() => navigate("AddWork")}>
                Add Work Location
              </Text>
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
    backgroundColor: "white"
  },
  image: {
    width: 300,
    height: 300
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:20
  },
  button: {
    fontSize: 18,
    color: "#1a73e8",
    marginBottom: 50,
    marginTop: 30,
    borderColor: "#1a73e8",
    borderRadius: 10,
    borderWidth: 2,
    padding: 10
  }
});
