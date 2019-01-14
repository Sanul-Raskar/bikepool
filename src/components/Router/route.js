import React, { Component } from "react";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import MainScreen from "../Initial/mainScreen";
import LoginScreen from "../Login/login";
import SignUpScreen from "../SignUp/signup";
import HomeScreen from "../Home/home";
import EditProfile from "../EditProfile/editProfile";
import EditFirstName from "../EditProfile/editFirstName";
import EditLastName from "../EditProfile/editLastName";
import EditPhoneNumber from "../EditProfile/editPhoneNumber";
import EditEmail from "../EditProfile/editEmail";
import EditUID from "../EditProfile/editUID";
import EditPassword from "../EditProfile/editPassword";
import AddHome from "../EditProfile/addHome";
import AddWork from "../EditProfile/addWork";

export default class componentName extends Component {
  render() {
    return <SwitchNavigator />;
  }
}
class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? "App" : "Auth");
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const AppStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },

    EditProfile: {
      screen: EditProfile,
      navigationOptions: {
        title: "Edit Account",
        headerStyle: {
          backgroundColor: "black"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    EditFirstName: {
      screen: EditFirstName,
      navigationOptions: {
        title: "Edit First Name",
        headerStyle: {
          backgroundColor: "black"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    EditLastName: {
      screen: EditLastName,
      navigationOptions: {
        title: "Edit Last Name",
        headerStyle: {
          backgroundColor: "black"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    EditPhoneNumber: {
      screen: EditPhoneNumber,
      navigationOptions: {
        title: "Edit Phone Number",
        headerStyle: {
          backgroundColor: "black"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    EditEmail: {
      screen: EditEmail,
      navigationOptions: {
        title: "Edit Email",
        headerStyle: {
          backgroundColor: "black"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    EditUID: {
      screen: EditUID,
      navigationOptions: {
        title: "Edit UID",
        headerStyle: {
          backgroundColor: "black"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    EditPassword: {
      screen: EditPassword,
      navigationOptions: {
        title: "Edit Password",
        headerStyle: {
          backgroundColor: "black"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    AddHome: {
      screen: AddHome,
      navigationOptions: {
        title: "Add Home",
        headerStyle: {
          backgroundColor: "black"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    AddWork: {
      screen: AddWork,
      navigationOptions: {
        title: "Add Work",
        headerStyle: {
          backgroundColor: "black"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AuthStack = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Signup: {
      screen: SignUpScreen,
      navigationOptions: {
        header: null
      }
    },
    App: {
      screen: AppStack,
      navigationOptions: {
        header: null,
        headerStyle: {
          backgroundColor: "black"
        }
      }
    }
  },
  {
    initialRouteName: "MainScreen"
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: {
      screen: AppStack,
      navigationOptions: {
        header: null,
        headerStyle: {
          backgroundColor: "black"
        }
      }
    },
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);
