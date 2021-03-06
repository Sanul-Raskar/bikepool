import React, { Component } from "react";
import { View, TextInput, Animated } from "react-native";

export default class FloatingLabelInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      border_color: this.props.border
    };
  }

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(
      this.props.value === "" ? 0 : 1
    );
  }

  handleFocus = () => {
    this.setState({ isFocused: true, border_color: this.props.onFocusBorder });
  };

  handleBlur = () => {
    this.setState({ isFocused: false, border_color: "#dadce0" });
  };

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value !== "" ? 1 : 0,
      duration: 150
    }).start();
  }

  render() {
    const {
      border,
      fontColor,
      onFocusBorder,
      label,
      ...props
    } = this.props;
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
        outputRange: [18, 16]
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ["#666666", this.props.fontColor]
      })
    };
    return (
      <View style={{ paddingTop: 12 }}>
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <TextInput
          {...props}
          style={{
            height: 150,
            fontSize: 18,
            color: "black",
            borderWidth: 1.5,
            borderColor: this.state.border_color,
            borderRadius: 8,
            textAlignVertical: 'top',
            marginBottom:8
          }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          multiline={true}
          numberOfLines={5}
          blurOnSubmit
        />
      </View>
    );
  }
}
