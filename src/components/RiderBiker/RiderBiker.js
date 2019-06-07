import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import { Card, CardItem, Body, Left, Right, Thumbnail } from "native-base";

export default class RiderBiker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FoundBikers: [
        {
          id: 1,
          Name: "Sanul Raskar",
          Source: "VIIT College of Engineering,Pune",
          Destination: "Shraddha Heritage, Morwadi,Pimpri"
        },
        {
          id: 2,
          Name: "Shubham Barmecha",
          Source: "VIIT College of Engineering,Pune",
          Destination: "Shraddha Heritage, Morwadi,Pimpri"
        },
        {
          id: 3,
          Name: "Kausthub Sankpal",
          Source: "VIIT College of Engineering,Pune",
          Destination: "Shraddha Heritage, Morwadi,Pimpri"
        },
        {
          id: 4,
          Name: "Rohit Jagtap",
          Source: "VIIT College of Engineering,Pune",
          Destination: "Shraddha Heritage, Morwadi,Pimpri"
        }
      ]
    };
  }

  GetItem = (name,source,destination) => {
    Alert.alert(
      "Are you sure ? ",
      "" + name + "\n" + source + "\n" + destination + "\n",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };

  RenderItem = ({ item }) => (
    <Card>
      <CardItem header bordered>
        <Left style={{ marginRight: 20 }}>
          <Thumbnail
            source={{
              uri:
                "https://facebook.github.io/react-native/docs/assets/favicon.png"
            }}
          />
          <Body>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.Name}
            </Text>
          </Body>
        </Left>
        <Right>
          <TouchableOpacity
            style={{
              backgroundColor: "#1a73e8",
              marginBottom: 2,
              borderRadius: 10,
              marginTop: 2
            }}
            onPress={this.GetItem.bind(this, item.Name,item.Source,item.Destination)}
          >
            <Text
              style={{
                fontSize: 15,
                color: "white",
                paddingVertical: 8,
                paddingHorizontal: 10
              }}
            >
              Select
            </Text>
          </TouchableOpacity>
        </Right>
      </CardItem>
      <CardItem>
        <Body style={{ maxWidth: 300 }}>
          <Text style={{ fontWeight: "bold" }}> Source</Text>
          <Text style={{ fontSize: 12 }} textBreakStrategy={"balanced"}>
            {item.Source}
          </Text>
          <Text>{""}</Text>
          <Text style={{ fontWeight: "bold" }}>Destination</Text>
          <Text style={{ fontSize: 12 }}>{item.Destination}</Text>
        </Body>
      </CardItem>
    </Card>
  );

  render() {
    return (
      <View style={{ flex: 1, padding: 4, backgroundColor: "white" }}>
        <Text> textInComponent </Text>
        <View
          style={{ marginTop: 5, position: "absolute", bottom: 5, left: 10 }}
        >
          <Text style={{ textAlign: "center", marginVertical: 4 }}>
            {" "}
            Swipe to explore
          </Text>

          <FlatList
            horizontal
            style={{ maxHeight: 300 }}
            data={this.state.FoundBikers}
            renderItem={this.RenderItem}
            keyExtractor={item => item.Name}
          />
        </View>
      </View>
    );
  }
}
