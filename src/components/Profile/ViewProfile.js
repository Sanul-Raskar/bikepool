import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Foundation from "react-native-vector-icons/Foundation";

export default class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Sanul",
      lastName: "Raskar",
      email: "sanulraskar@gmail.com",
      mobile: "7350142164",
      birthDate: "1998/05/19",
      gender: "Male"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.title}>
            <MaterialIcon name="person" color="#1a73e8" size={30} />
            <Text style={styles.listText}>First Name</Text>
          </View>
          <Text style={styles.listSubTextLabel}>{this.state.firstName}</Text>

          <View style={styles.title}>
            <MaterialIcon name="person" color="#1a73e8" size={30} />
            <Text style={styles.listText}>Last Name</Text>
          </View>
          <Text style={styles.listSubTextLabel}>{this.state.lastName}</Text>

          <View style={styles.title}>
            <MaterialIcon name="email" color="#1a73e8" size={30} />
            <Text style={styles.listText}>Email</Text>
          </View>
          <Text style={styles.listSubTextLabel}>{this.state.email}</Text>

          <View style={styles.title}>
            <MaterialIcon name="phone-iphone" color="#1a73e8" size={30} />
            <Text style={styles.listText}>Mobile</Text>
          </View>
          <Text style={styles.listSubTextLabel}>{this.state.mobile}</Text>

          <View style={styles.title}>
            <MaterialIcon name="cake" color="#1a73e8" size={30} />
            <Text style={styles.listText}>Birthdate</Text>
          </View>
          <Text style={styles.listSubTextLabel}>{this.state.birthDate}</Text>

          <View style={styles.title}>
            <Foundation name="male-female" color="#1a73e8" size={30} />
            <Text style={styles.listText}>Gender</Text>
          </View>
          <Text style={styles.listSubTextLabel}>{this.state.gender}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20
  },

  title: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  listText: {
    paddingLeft: 10,
    fontSize: 20,
    color: "black",
    fontWeight: "bold"
  },
  listSubTextLabel: {
    paddingLeft: 40,
    fontSize: 18,
    color: "black",
    marginBottom: 20
  }
});
