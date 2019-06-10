import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  FlatList
} from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import { Card, CardItem, Thumbnail, Text, Left, Body } from "native-base";

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
  constructor(props) {
    super(props);
    this.state = {
      PreviousRides: [
        {
          id: "1",
          Name: "Shubham Barmecha",
          Type: "You offered ride",
          Source: "VIIT College of Engineering,Pune",
          Destination: "Shraddha Heritage, Morwadi,Pimpri",
          Vehicle_Number: "MH 12 EV 1058",
          Time: "Tue Dec 25 2018 07:30:00"
        },
        {
          id: "2",
          Name: "Kaustubh Sankpal",
          Type: "He offered ride",
          Source: "VIIT College of Engineering,Pune",
          Destination: "Shraddha Heritage, Morwadi,Pimpri",
          Vehicle_Number: "MH 12 EV 1058",
          Time: "Tue Dec 25 2018 07:30:00"
        },
        {
          id: "3",
          Name: "Rohit Jagtap",
          Type: "You offered ride",
          Source: "VIIT College of Engineering,Pune",
          Destination: "Shraddha Heritage, Morwadi,Pimpri",
          Vehicle_Number: "MH 12 EV 1058",
          Time: "Tue Dec 25 2018 07:30:00"
        }
      ]
    };
  }

  RenderItem = ({ item }) => (
    <Card style={{ marginBottom: 10 }}>
      <CardItem>
        <Left>
          <Thumbnail
            source={{
              uri:
                "https://facebook.github.io/react-native/docs/assets/favicon.png"
            }}
          />
          <Body>
            <Text style={styles.label}>{item.Name} </Text>
            <Text note>{item.Type}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Left>
          <Body>
            <Text style={styles.label}>Source:</Text>
            <Text style={styles.subText}>{item.Source}</Text>
            <Text style={styles.label}>Destination:</Text>
            <Text style={styles.subText}>{item.Destination}</Text>
            <Text style={styles.label}>Vehicle Number:</Text>
            <Text style={styles.subText}>{item.Vehicle_Number}</Text>
            <Text style={styles.label}>Time Stamp:</Text>
            <Text style={styles.subText}>{item.Time}</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={this.state.PreviousRides}
            renderItem={this.RenderItem}
            keyExtractor={item => item.id}
            style={{padding:10}}
          />
        </ScrollView>
      </View>
    );
  }
}

export class UpcomingRides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UpcomingRides: [
        {
          id: "1",
          Name: "Shubham Barmecha",
          Type: "You are offering ride",
          Source: "VIIT College of Engineering,Pune",
          Destination: "Shraddha Heritage, Morwadi,Pimpri",
          Vehicle_Number: "MH 12 EV 1058",
          Time: "Wed May 25 2019 07:30:00"
        }
      ]
    };
  }

  RenderItem = ({ item }) => (
    <Card style={{ marginBottom: 10 }}>
      <CardItem>
        <Left>
          <Thumbnail
            source={{
              uri:
                "https://facebook.github.io/react-native/docs/assets/favicon.png"
            }}
          />
          <Body>
            <Text style={styles.label}>{item.Name} </Text>
            <Text note>{item.Type}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Left>
          <Body>
            <Text style={styles.label}>Source:</Text>
            <Text style={styles.subText}>{item.Source}</Text>
            <Text style={styles.label}>Destination:</Text>
            <Text style={styles.subText}>{item.Destination}</Text>
            <Text style={styles.label}>Vehicle Number:</Text>
            <Text style={styles.subText}>{item.Vehicle_Number}</Text>
            <Text style={styles.label}>Time Stamp:</Text>
            <Text style={styles.subText}>{item.Time}</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={this.state.UpcomingRides}
            renderItem={this.RenderItem}
            keyExtractor={item => item.id}
            style={{padding:10}}
          />
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
      inactiveTintColor: "#6a707c",
      style: {
        backgroundColor: "white"
      },
      indicatorStyle: { backgroundColor: "#1a73e8" },
      pressColor: "#1a73e8"
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
    fontWeight: "bold"
  },
  subText: {
    fontSize: 14,
    marginBottom: 20
  }
});
