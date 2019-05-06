import React, { Component } from "react";
import { View, TextInput, Animated } from "react-native";

export default class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
    borderColor: "#dadce0"
  };

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(
      this.props.value === "" ? 0 : 1
    );
  }

  handleFocus = () =>
    this.setState({ isFocused: true, borderColor: "#1a73e8" });
  handleBlur = () =>
    this.setState({ isFocused: false, borderColor: "#dadce0" });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value !== "" ? 1 : 0,
      duration: 200
    }).start();
  }

  render() {
    const { label, ...props } = this.props;
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
        outputRange: [22, 16]
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
            fontSize: 22,
            color: "black",
            borderWidth: 1.5,
            borderColor: this.state.borderColor,
            fontFamily: "sans-serif-light"
          }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  }
}
