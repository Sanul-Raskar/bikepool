import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, StatusBar } from "react-native";
import { connect } from "react-redux";
import { getloginedUser } from "../../../action/action";
import { getUser, getUserError } from "../../../reducer/reducer";

export class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "Raskar",
      email: "sanulraskar@gmail.com",
      mobile: "7350142164",
      birthDate: "1998/05/19",
      gender: "Male"
    };
  }
  componentDidMount() {
    this.props.getloginedUser();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.title}>
            <Text style={styles.listText}>First Name</Text>
          </View>
          <Text style={styles.listSubTextLabel}>{this.state.firstName}</Text>

          <View style={styles.title}>
            <Text style={styles.listText}>Last Name</Text>
          </View>
          <Text style={styles.listSubTextLabel}>{this.state.lastName}</Text>

          <View style={styles.title}>
            <Text style={styles.listText}>Email</Text>
          </View>
          <Text style={styles.listSubTextLabel}>{this.state.email}</Text>

          <View style={styles.title}>
            <Text style={styles.listText}>Mobile</Text>
          </View>
          <Text style={styles.listSubTextLabel}>{this.state.mobile}</Text>

          <View style={styles.title}>
            <Text style={styles.listText}>Birthdate</Text>
          </View>
          <Text style={styles.listSubTextLabel}>{this.state.birthDate}</Text>

          <View style={styles.title}>
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

const mapStateToProps = state => {
  return {
    user: state.userData
  };
};

const mapDispatchToProps = {
  getloginedUser
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewProfile);
