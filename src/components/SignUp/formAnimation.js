import React, { Component } from "react";
import { View, TextInput, Animated } from "react-native";

export default class FloatingLabelInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      border_color: this.props.border,
      keyboard:this.props.keyboardLayout,
      password:this.props.passwordSecurity
    };
  }

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(
      this.props.value === "" ? 0 : 1
    );
  }

  handleFocus = () =>
    this.setState({ isFocused: true, border_color: "#1a73e8" });
  handleBlur = () =>
    this.setState({ isFocused: false, border_color: "#dadce0" });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value !== "" ? 1 : 0,
      duration: 150
    }).start();

  }

  render() {
    const { border,keyboardLayout,passwordSecurity, label, ...props } = this.props;
    const labelStyle = {
      position: "absolute",
      left: 12,
      padding: 2,
      backgroundColor: "white",
      zIndex: 10,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 0]
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 16]
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ["#666666", "#1a73e8"]
      })
    };
    return (
      <View style={{ paddingTop: 12 }}>
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <TextInput
          {...props}
          style={{
            height: 50,
            fontSize: 20,
            color: "black",
            borderWidth: 1.5,
            borderColor: this.state.border_color,
            borderRadius: 8
            
          }}
          keyboardType = {this.state.keyboard}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          secureTextEntry={this.state.password}
          blurOnSubmit
        />
      </View>
    );
  }
}
