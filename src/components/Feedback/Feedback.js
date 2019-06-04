import React, { Component } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import FloatingLabelInput from "./formAnimation";

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSource: require("../../assets/img/emoji/neutral.png"),
      feedbackrating: 3,
      feedbackComments: "",
      feedbackComments_font_color: "#1a73e8",
      feedbackComments_onFocus_border: "#1a73e8",
      border_Color_feedbackComments: "#dadce0"
    };
    this.ratingCompleted = this.ratingCompleted.bind(this);
  }
  handleCommentChange = newValue => {
    this.setState({ feedbackComments: newValue });
  };
  ratingCompleted(rating) {
    this.setState({ feedbackrating: rating });

    switch (rating) {
      case 1:
        this.setState({
          imageSource: require("../../assets/img/emoji/angry.png")
        });
        break;

      case 2:
        this.setState({
          imageSource: require("../../assets/img/emoji/disappointed.png")
        });
        break;

      case 3:
        this.setState({
          imageSource: require("../../assets/img/emoji/neutral.png")
        });
        break;

      case 4:
        this.setState({
          imageSource: require("../../assets/img/emoji/smiling.png")
        });
        break;

      case 5:
        this.setState({
          imageSource: require("../../assets/img/emoji/happy.png")
        });
        break;
    }
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          padding: 22
        }}
      >
        <ScrollView>
          <Text
            style={{ textAlign: "center", fontSize: 18, marginVertical: 2 }}
          >
            Rate your ride
          </Text>
          <View
            style={{
              alignItems: "center"
            }}
          >
            <Image source={this.state.imageSource} />
          </View>

          <AirbnbRating
            count={5}
            reviews={["Terrible", "Bad", "OK", "Good", "Amazing"]}
            defaultRating={3}
            size={30}
            showRating={true}
            onFinishRating={this.ratingCompleted}
          />

          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              marginTop: 14,
              marginBottom: 4
            }}
          >
            Tell us how was your ride?
          </Text>
          <FloatingLabelInput
            label="Comments"
            value={this.state.feedbackComments}
            onChangeText={this.handleCommentChange}
            border={this.state.border_Color_feedbackComments}
            fontColor={this.state.feedbackComments_font_color}
            onFocusBorder={this.state.feedbackComments_onFocus_border}
          />

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
                  marginTop: 30,
                  borderColor: "#1a73e8",
                  borderRadius: 10,
                  borderWidth: 2,
                  padding: 10
                }}
              >
                Skip
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#1a73e8",
                marginBottom: 50,
                borderRadius: 10,
                marginTop: 30
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "white",
                  paddingVertical: 10,
                  paddingHorizontal: 18
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
