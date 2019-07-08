import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Picker,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from "react-native";
import FloatingLabelInput from "../FormAnimation/formAnimation";

export default class AddBikeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manufacturerSelected: false,
      manufacturer: "",
      modal: "",
      bikeColor: "",
      Colors: ["White", "Black", "Light Blue", "Red"],
      bike: [
        {
          key: "1",
          manufacturer: "Honda",
          modal: ["Activa", "bike1", "bike2"]
        },
        {
          key: "2",
          manufacturer: "TVS",
          modal: ["Scooty", "Jupiter", "bike1"]
        },
        {
          key: "3",
          manufacturer: "Hero",
          modal: ["Pleasure", "Mestro", "CD Deluxe"]
        }
      ],
      drivingLicense: "",
      drivingLicense_font_color: "#1a73e8",
      drivingLicense_onFocus_border: "#1a73e8",
      border_Color_drivingLicense: "#dadce0",
      vehicleLicense: "",
      vehicleLicense_font_color: "#1a73e8",
      vehicleLicense_onFocus_border: "#1a73e8",
      border_Color_vehicleLicense: "#dadce0",
      drivingLicenseError: "",
      vehicleLicenseError: ""
    };
  }

  handleVehicleLicenseChange = newValue => {
    this.setState({ vehicleLicense: newValue });
  };
  handleDrivingLicenseChange = newValue => {
    this.setState({ drivingLicense: newValue });
  };

  renderManufacturer = () => {
    console.log(this.state.bike);
    this.state.bike.map((item, i) => {
      return (
        <Picker.Item
          key={i}
          label={item.manufacturer}
          value={item.manufacturer}
        />
      );
    });
  };

  filterArray = () => {
    let modals;
    let filtered = this.state.bike.filter(item => {
      if (this.state.manufacturer == item.manufacturer) {
        modals = item.modal;
        return item;
      }
    });

    return (
      <View>
        <Text
          style={{
            fontSize: 16,
            marginTop: 8,
            color: "#666666",
            zIndex: 10,
            backgroundColor: "white",
            width: 120,
            marginBottom: 0,
            marginLeft: 8
          }}
        >
          Select Modal
        </Text>
        <View
          style={{
            borderWidth: 1.5,
            borderRadius: 8,
            marginBottom: 8,
            borderColor: "#dadce0",
            marginTop: -8
          }}
        >
          <Picker
            selectedValue={this.state.modal}
            mode="dialog"
            style={{
              height: 50,
              width: "100%",
              borderColor: "#dadce0",
              borderWidth: 1.5,
              borderRadius: 8,
              marginTop: 0,
              color: "#666666"
            }}
            onValueChange={itemValue =>
              this.setState({
                modal: itemValue
              })
            }
          >
            {modals.map((item, i) => {
              return <Picker.Item key={i} label={item} value={item} />;
            })}
          </Picker>
        </View>
      </View>
    );
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              fontSize: 16,
              marginTop: 8,
              color: "#666666",
              zIndex: 10,
              backgroundColor: "white",
              width: 150,
              marginBottom: 0,
              marginLeft: 8
            }}
          >
            Select Manufacturer
          </Text>

          <View
            style={{
              borderWidth: 1.5,
              borderRadius: 8,
              marginBottom: 8,
              borderColor: "#dadce0",
              marginTop: -8
            }}
          >
            <Picker
              selectedValue={this.state.manufacturer}
              mode="dialog"
              style={{
                height: 50,
                width: "100%",
                borderColor: "#dadce0",
                borderWidth: 1.5,
                borderRadius: 8,
                marginTop: 0,
                color: "#666666"
              }}
              onValueChange={itemValue =>
                this.setState({
                  manufacturer: itemValue,
                  manufacturerSelected: true
                })
              }
            >
              <Picker.Item label="Select Manufacturer" value="" />
              {this.state.bike.map((item, i) => {
                return (
                  <Picker.Item
                    key={i}
                    label={item.manufacturer}
                    value={item.manufacturer}
                  />
                );
              })}
            </Picker>
          </View>

          {this.state.manufacturerSelected && this.filterArray()}

          <Text
            style={{
              fontSize: 16,
              marginTop: 8,
              color: "#666666",
              zIndex: 10,
              backgroundColor: "white",
              width: 80,
              marginBottom: 0,
              marginLeft: 8
            }}
          >
            Bike color
          </Text>

          <View
            style={{
              borderWidth: 1.5,
              borderRadius: 8,
              marginBottom: 8,
              borderColor: "#dadce0",
              marginTop: -8
            }}
          >
            <Picker
              selectedValue={this.state.bikeColor}
              mode="dialog"
              style={{
                height: 50,
                width: "100%",
                borderColor: "#dadce0",
                borderWidth: 1.5,
                borderRadius: 8,
                marginTop: 0,
                color: "#666666"
              }}
              onValueChange={itemValue =>
                this.setState({
                  bikeColor: itemValue
                })
              }
            >
              <Picker.Item label="Select Bike Color" value="" />
              {this.state.Colors.map((item, i) => {
                return <Picker.Item key={i} label={item} value={item} />;
              })}
            </Picker>
          </View>

          <FloatingLabelInput
            label="Vehicle License Number"
            value={this.state.vehicleLicense}
            border={this.state.border_Color_vehicleLicense}
            onChangeText={this.handleVehicleLicenseChange}
            keyboardLayout="default"
            fontColor={this.state.vehicleLicense_font_color}
            onFocusBorder={this.state.vehicleLicense_onFocus_border}
          />
          {this.state.vehicleLicenseError !== "" && (
            <Text style={styles.error}>
              <Icon name="alert-circle" color="red" size={16} />{" "}
              {this.state.vehicleLicenseError}
            </Text>
          )}

          <FloatingLabelInput
            label="Driving License Number"
            value={this.state.drivingLicense}
            border={this.state.border_Color_drivingLicense}
            onChangeText={this.handleDrivingLicenseChange}
            keyboardLayout="default"
            fontColor={this.state.drivingLicense_font_color}
            onFocusBorder={this.state.drivingLicense_onFocus_border}
          />
          {this.state.drivingLicenseError !== "" && (
            <Text style={styles.error}>
              <Icon name="alert-circle" color="red" size={16} />{" "}
              {this.state.drivingLicenseError}
            </Text>
          )}

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end"
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#1a73e8",
                marginBottom: 50,
                borderRadius: 10,
                marginTop: 60
              }}
              /* onPress={this.validate}*/
              onPress={() => navigate("AccountCreated")}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                  paddingTop: 10,
                  paddingBottom: 12,
                  paddingHorizontal: 18,
                  textAlign: "center"
                }}
              >
                Next
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
    backgroundColor: "white",
    padding: 22
  },
  error: {
    paddingTop: 4,
    paddingBottom: 6,
    fontSize: 16,
    color: "red"
  }
});
