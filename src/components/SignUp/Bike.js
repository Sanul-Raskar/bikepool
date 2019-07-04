import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  Picker,
  ScrollView,
  BackHandler
} from "react-native";
import FloatingLabelInput from "../FormAnimation/formAnimation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Bike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      askBikeView: true,
      bikeInfoView: false,
      manufacturerSelected: false,

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
      vehicleLicense: "",
      manufacturer: "",
      modal: "",
      bikeColor: "",
      manufacturerError: "",
      modalError: "",
      bikeColorError: "",
      drivingLicenseError: "",
      vehicleLicenseError: "",

      drivingLicense_font_color: "#1a73e8",
      drivingLicense_onFocus_border: "#1a73e8",
      border_Color_drivingLicense: "#dadce0",

      vehicleLicense_font_color: "#1a73e8",
      vehicleLicense_onFocus_border: "#1a73e8",
      border_Color_vehicleLicense: "#dadce0",

      manufacturer_font_color: "#1a73e8",
      modal_font_color: "#1a73e8",
      bikeColor_font_color: "#1a73e8"
    };
  }
  toggleView = () => {
    this.setState({
      askBikeView: !this.state.askBikeView,
      bikeInfoView: !this.state.bikeInfoView
    });
  };

  validateManufacturer = () => {
    if (
      this.state.manufacturer === "" ||
      this.state.manufacturer === "Select"
    ) {
      this.setState({
        manufacturerError: "Required",
        manufacturer_font_color: "red"
      });
      return false;
    } else {
      this.setState({
        manufacturerError: "",
        manufacturer_font_color: "#1a73e8"
      });
      return true;
    }
  };

  validateModal = () => {
    if (this.state.modal === "" || this.state.modal === "Select") {
      this.setState({
        modalError: "Required",
        modal_font_color: "red"
      });
      return false;
    } else {
      this.setState({
        modalError: "",
        modal_font_color: "#1a73e8"
      });
      return true;
    }
  };

  validateColor = () => {
    if (this.state.bikeColor === "" || this.state.bikeColor === "Select") {
      this.setState({
        bikeColorError: "Required",
        bikeColor_font_color: "red"
      });
      return false;
    } else {
      this.setState({
        bikeColorError: "",
        bikeColor_font_color: "#1a73e8"
      });
      return true;
    }
  };

  validateVehicleLicense = () => {
    if (this.state.vehicleLicense === "") {
      this.setState({
        border_Color_vehicleLicense: "red",
        vehicleLicenseError: "Required",
        vehicleLicense_font_color: "red",
        vehicleLicense_onFocus_border: "red"
      });
      return false;
    } else {
      this.setState({
        border_Color_vehicleLicense: "#dadce0",
        vehicleLicenseError: "",
        vehicleLicense_font_color: "#1a73e8",
        vehicleLicense_onFocus_border: "#1a73e8"
      });
      return true;
    }
  };

  validateDrivingLicense = () => {
    if (this.state.drivingLicense === "") {
      this.setState({
        border_Color_drivingLicense: "red",
        drivingLicenseError: "Required",
        drivingLicense_font_color: "red",
        drivingLicense_onFocus_border: "red"
      });
      return false;
    } else {
      this.setState({
        border_Color_drivingLicense: "#dadce0",
        drivingLicenseError: "",
        vehicleLicense_font_color: "#1a73e8",
        vehicleLicense_onFocus_border: "#1a73e8"
      });
      return true;
    }
  };

  validate = () => {
    if (
      this.validateManufacturer() &
      this.validateModal() &
      this.validateColor() &
      this.validateVehicleLicense() &
      this.validateDrivingLicense()
    ) {
      this.nextPreprocess();
    }
  };

  nextPreprocess = () => {
    this.props.saveState(2, {
      manufacturer: this.state.manufacturer,
      modal: this.state.modal,
      bikeColor: this.state.bikeColor,
      drivingLicense: this.state.drivingLicense,
      vehicleLicense: this.state.vehicleLicense
    });

    this.props.nextFn();
  };

  renderManufacturer = () => {
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
            <Picker.Item label="Select" value="" />
            {modals.map((item, i) => {
              return <Picker.Item key={i} label={item} value={item} />;
            })}
          </Picker>
        </View>
        {this.state.modalError !== "" && (
          <Text style={styles.error}>
            <Icon name="alert-circle" color="red" size={16} />{" "}
            {this.state.modalError}
          </Text>
        )}
      </View>
    );
  };

  handleVehicleLicenseChange = newValue => {
    this.setState({ vehicleLicense: newValue });
  };
  handleDrivingLicenseChange = newValue => {
    this.setState({ drivingLicense: newValue });
  };

  handleBackPress = () => {
    if (this.state.askBikeView == true && this.state.bikeInfoView == false) {
      this.props.saveState(2, {
        manufacturer: this.state.manufacturer,
        modal: this.state.modal,
        bikeColor: this.state.bikeColor,
        drivingLicense: this.state.drivingLicense,
        vehicleLicense: this.state.vehicleLicense
      });
      this.props.prevFn();
    } else {
      this.toggleView();
    }
    return true;
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        {this.state.askBikeView && (
          <View style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <Text style={styles.text}> Do you have a Bike or Scooter? </Text>
            <View style={styles.bottomButtons}>
              <TouchableOpacity>
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
                  onPress={this.nextPreprocess}
                >
                  No
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.YesButton}
                onPress={this.toggleView}
              >
                <Text style={styles.ButtonText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {this.state.bikeInfoView && (
          <View style={{ flex: 1 }}>
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
                  <Picker.Item label="Select" value="" />
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
              {this.state.manufacturerError !== "" && (
                <Text style={styles.error}>
                  <Icon name="alert-circle" color="red" size={16} />{" "}
                  {this.state.manufacturerError}
                </Text>
              )}

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
                  <Picker.Item label="Select" value="" />
                  {this.state.Colors.map((item, i) => {
                    return <Picker.Item key={i} label={item} value={item} />;
                  })}
                </Picker>
              </View>
              {this.state.bikeColorError !== "" && (
                <Text style={styles.error}>
                  <Icon name="alert-circle" color="red" size={16} />{" "}
                  {this.state.bikeColorError}
                </Text>
              )}

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
                  justifyContent: "space-between"
                }}
              >
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#1a73e8",
                      marginBottom: 50,
                      marginTop: 60,
                      borderColor: "#1a73e8",
                      borderRadius: 10,
                      borderWidth: 2,
                      padding: 10,
                      textAlign: "center"
                    }}
                    onPress={this.toggleView}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    backgroundColor: "#1a73e8",
                    marginBottom: 50,
                    borderRadius: 10,
                    marginTop: 60
                  }}
                  onPress={this.validate}
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
        )}
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
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  YesButton: {
    backgroundColor: "#1a73e8",
    marginBottom: 50,
    borderRadius: 10,
    marginTop: 30
  },
  ButtonText: {
    fontSize: 18,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 18,
    textAlign: "center"
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});
