import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Foundation from "react-native-vector-icons/Foundation";
import { connect } from "react-redux";
import { getloginedUser } from "../../../action/userDataAction";

export class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedData: false
    };
  }

  fetchProfile = () => {
    if (this.props.user.userData != null) {
      this.setState({
        fetchedData: true
      });
    }
  };

  componentDidMount() {
    this.fetchProfile();
  }

  showActivityIndicator = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#1a73e8" />
      </View>
    );
  };

  showContent = () => {
    const user = this.props.user.userData;
    return (
      <View>
        {this.state.fetchedData == false && (
          <View
            style={{
              flex: 1,
              padding: 22,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Error loading profile
            </Text>
            <TouchableOpacity onPress={this.fetchProfile}>
              <Text
                style={{
                  fontSize: 18,
                  color: "#1a73e8",
                  marginBottom: 50,
                  marginTop: 30,
                  borderColor: "#1a73e8",
                  borderRadius: 10,
                  borderWidth: 2,
                  padding: 10,
                  textAlign: "center"
                }}
              >
                Try Again
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {this.state.fetchedData && (
          <View>
            <View style={styles.title}>
              <MaterialIcon name="person" color="#1a73e8" size={30} />
              <Text style={styles.listText}>Name</Text>
            </View>
            <Text style={styles.listSubTextLabel}>
              {user.firstname + " " + user.lastname}
            </Text>

            <View style={styles.title}>
              <MaterialIcon name="email" color="#1a73e8" size={30} />
              <Text style={styles.listText}>Email</Text>
            </View>
            <Text style={styles.listSubTextLabel}>{user.email}</Text>

            <View style={styles.title}>
              <MaterialIcon name="phone-iphone" color="#1a73e8" size={30} />
              <Text style={styles.listText}>Mobile</Text>
            </View>
            <Text style={styles.listSubTextLabel}>{user.mobile}</Text>

            <View style={styles.title}>
              <MaterialIcon name="cake" color="#1a73e8" size={30} />
              <Text style={styles.listText}>Birthdate</Text>
            </View>
            <Text style={styles.listSubTextLabel}>{user.birthdate}</Text>

            <View style={styles.title}>
              <Foundation name="male-female" color="#1a73e8" size={30} />
              <Text style={styles.listText}>Gender</Text>
            </View>
            <Text style={styles.listSubTextLabel}>{user.gender}</Text>
          </View>
        )}
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.props.user.loading
            ? this.showActivityIndicator()
            : this.showContent()}
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
  const user = state.ViewProfile;
  return {
    user
  };
};

const mapDispatchToProps = {
  getloginedUser
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewProfile);
