import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right
} from "native-base";

export default class topTabs extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <TopNavigator />
      </SafeAreaView>
    );
  }
}

export class PreviousRides extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <Card>
            <CardItem style={{ backgroundColor: "rgb(38, 38, 38)" }}>
              <Left>
                <Thumbnail source={require("../../assets/img/shubham.jpg")} />
                <Body>
                  <Text style={styles.label}>Shubham Barmecha</Text>
                  <Text style={{ color: "white" }} note>
                    You offered ride
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{ backgroundColor: "rgb(38, 38, 38)" }}>
              <Left>
                <Body>
                  <Text style={styles.label}>Source</Text>
                  <Text style={styles.subText}>Home</Text>
                  <Text style={styles.label}>Destination</Text>
                  <Text style={styles.subText}>
                    Starbucks Coffee Mosaic Ground Floor West Across Fergusson
                    College Gate, 2, Fergusson College Rd, Shivajinagar, Pune,
                    Maharashtra 411004
                  </Text>
                  <Text style={styles.label}>Vehicle Number</Text>
                  <Text style={styles.subText}>MH 12 EV 1058</Text>
                  <Text style={styles.label}>Time Stamp</Text>
                  <Text style={styles.subText}>Tue Dec 25 2018 07:30:00</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={{ backgroundColor: "rgb(38, 38, 38)" }}>
              <Left>
                <Thumbnail source={require("../../assets/img/kaustubh.jpg")} />
                <Body>
                  <Text style={styles.label}>Kaustubh Sankpal</Text>
                  <Text style={{ color: "white" }} note>
                    He offered ride
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{ backgroundColor: "rgb(38, 38, 38)" }}>
              <Left>
                <Body>
                  <Text style={styles.label}>Source</Text>
                  <Text style={styles.subText}>Home</Text>
                  <Text style={styles.label}>Destination</Text>
                  <Text style={styles.subText}>Work</Text>
                  <Text style={styles.label}>Vehicle Number</Text>
                  <Text style={styles.subText}>MH 12 AC 1753</Text>
                  <Text style={styles.label}>Time Stamp</Text>
                  <Text style={styles.subText}>Wed Dec 12 2018 07:30:00</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={{ backgroundColor: "rgb(38, 38, 38)" }}>
              <Left>
                <Thumbnail source={require("../../assets/img/andy.png")} />
                <Body>
                  <Text style={styles.label}>Aniruddha Tonge</Text>
                  <Text style={{ color: "white" }} note>
                    He offered ride
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{ backgroundColor: "rgb(38, 38, 38)" }}>
              <Left>
                <Body>
                  <Text style={styles.label}>Source</Text>
                  <Text style={styles.subText}>Home</Text>
                  <Text style={styles.label}>Destination</Text>
                  <Text style={styles.subText}>Work</Text>
                  <Text style={styles.label}>Vehicle Number</Text>
                  <Text style={styles.subText}>MH 12 AC 1753</Text>
                  <Text style={styles.label}>Time Stamp</Text>
                  <Text style={styles.subText}>Wed Dec 12 2018 07:30:00</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

export class UpcomingRides extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <ScrollView>
          <Card>
            <CardItem style={{ backgroundColor: "rgb(38, 38, 38)" }}>
              <Left>
                <Thumbnail source={require("../../assets/img/vijay.jpg")} />
                <Body>
                  <Text style={styles.label}>Vijay Raskar</Text>
                  <Text style={{ color: "white" }} note>
                    You are offering ride
                  </Text>
                </Body>
              </Left>
              <Right>
                <TouchableOpacity style={styles.trackButton}>
                  <Text style={styles.ButtonText}>Track</Text>
                </TouchableOpacity>
              </Right>
            </CardItem>
            <CardItem style={{ backgroundColor: "rgb(38, 38, 38)" }}>
              <Left>
                <Body>
                  <Text style={styles.label}>Source</Text>
                  <Text style={styles.subText}>
                    Narveer Tanaji Housing Society Ramling - Shirur Rd
                    Shivrashka Colony Shirur, Maharashtra 412210
                  </Text>
                  <Text style={styles.label}>Destination</Text>
                  <Text style={styles.subText}>
                    Ranjangaon MIDC, Maharashtra 412220
                  </Text>
                  <Text style={styles.label}>Vehicle Number</Text>
                  <Text style={styles.subText}>MH 12 EV 1058</Text>
                  <Text style={styles.label}>Time Stamp</Text>
                  <Text style={styles.subText}>Tue Dec 25 2018 07:30:00</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const TopNavigator = createMaterialTopTabNavigator(
  {
    Previous: { screen: PreviousRides, tabBarLabel: "Previous Rides" },
    Upcoming: { screen: UpcomingRides, tabBarLabel: "Upcoming Rides" }
  },
  {
    tabBarOptions: {
      activeTintColor: "#1a73e8",
      inactiveTintColor: "#dadce0",
      style: {
        backgroundColor: "white"
      },
      indicatorStyle: { backgroundColor: "#1a73e8" },
      pressColor: "#dadce0"
    }
  }
);

const styles = StyleSheet.create({
  myText: {
    margin: 60,
    justifyContent: "center",
    fontSize: 22
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  },
  subText: {
    fontSize: 14,
    marginBottom: 20,
    color: "white"
  },
  trackButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    width: 100,
    borderRadius: 24
  },
  ButtonText: {
    fontSize: 16,
    textAlign: "center",
    color: "black",
    fontWeight: "bold"
  }
});
