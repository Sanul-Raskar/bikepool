import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Image
} from "react-native";
import { List, ListItem, Body } from "native-base";

PROFILE_IMAGE_MAX_HEIGHT = 100;
PROFILE_IMAGE_MIN_HEIGHT = 60;

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ backgroundColor: "white" }}>
        <ScrollView>
          <List>
            <ListItem style={{ borderBottomWidth: 0 }}>
              <Image
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
                  borderColor: "white",
                  borderWidth: 3,
                  overflow: "hidden",
                  marginTop: 14,
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
                source={require("./sanul.jpeg")}
              />
            </ListItem>
            <ListItem>
              <Body>
                <Text style={{ marginLeft: "auto", marginRight: "auto" }}>
                  Edit Image
                </Text>
              </Body>
            </ListItem>
            <ListItem style={{ borderBottomWidth: 0 }}>
              <Text style={styles.label}>First Name</Text>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => navigate("EditFirstName")}>
                <Text style={styles.info}>Sanul</Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem style={{ borderBottomWidth: 0 }}>
              <Text style={styles.label}>Last Name</Text>
            </ListItem>
            <ListItem>
              <TouchableOpacity onPress={() => navigate("EditLastName")}>
                <Text style={styles.info}>Raskar</Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem style={{ borderBottomWidth: 0 }}>
              <Text style={styles.label}>Phone Number</Text>
            </ListItem>
            <ListItem>
              <TouchableOpacity>
                <Text style={styles.info}>+91 7350142164</Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem style={{ borderBottomWidth: 0 }}>
              <Text style={styles.label}>Email</Text>
            </ListItem>
            <ListItem>
              <TouchableOpacity>
                <Text style={styles.info}>sanulraskar@gmail.com</Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem style={{ borderBottomWidth: 0 }}>
              <Text style={styles.label}>UID Number</Text>
            </ListItem>
            <ListItem>
              <TouchableOpacity>
                <Text style={styles.info}>9906 0457 2612</Text>
              </TouchableOpacity>
            </ListItem>
            <ListItem style={{ borderBottomWidth: 0 }}>
              <Text style={styles.label}>Password</Text>
            </ListItem>
            <ListItem>
              <TouchableOpacity>
                <Text style={styles.info}>*************</Text>
              </TouchableOpacity>
            </ListItem>
          </List>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: "grey"
  },
  info: {
    fontSize: 20,
    color: "black"
  }
});
