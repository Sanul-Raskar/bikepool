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
import EditProfile from "../EditProfile/EditProfile";
import EditFirstName from "../EditProfile/editFirstName";
import EditLastName from "../EditProfile/editLastName";
import EditPhoneNumber from "../EditProfile/editPhoneNumber";
import EditEmail from "../EditProfile/editEmail";
import EditUID from "../EditProfile/editUID";
import EditPassword from "../EditProfile/editPassword";
import AddHome from "../EditProfile/addHome";
import AddWork from "../EditProfile/addWork";
import RideDetails from "../Ride/Ride";
import FeedBack from "../Feedback/Feedback";
import RiderBiker from "../RiderBiker/RiderBiker";
import ViewProfile from "../Profile/ViewProfile";
import ChangePassword from "../Profile/ChangePassword";
import SavedHome from "../Profile/SavedHome";
import SavedWork from "../Profile/SavedWork";
import Loader from "../RiderBiker/Loader";
import AddPlaces from "../SignUp/AddPlaces";
import AddHomeWork from "../SignUp/AddHomeWork";
import Bike from "../SignUp/Bike";
import AddBikeInfo from "../SignUp/AddBikeInfo";
import AccountCreated from "../SignUp/AccountCreated"

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
        title: "Edit Profile",
        headerStyle: {
          backgroundColor: "white"
        },
        headerTintColor: "#1a73e8",
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
          backgroundColor: "white"
        },
        headerTintColor: "#1a73e8",
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
          backgroundColor: "white"
        },
        headerTintColor: "#1a73e8",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    RideDetails: {
      screen: RideDetails,
      navigationOptions: {
        title: "Ride Details",
        headerStyle: {
          backgroundColor: "white"
        },
        headerTintColor: "#1a73e8",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    FeedBack: {
      screen: FeedBack,
      navigationOptions: {
        title: "Feedback",
        headerStyle: {
          backgroundColor: "white"
        },
        headerTintColor: "#1a73e8",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    RiderBiker: {
      screen: RiderBiker,
      navigationOptions: {
        title: "Select your Ride",
        headerStyle: {
          backgroundColor: "white"
        },
        headerTintColor: "#1a73e8",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    ViewProfile: {
      screen: ViewProfile,
      navigationOptions: {
        title: "Profile",
        headerStyle: {
          backgroundColor: "white"
        },
        headerTintColor: "#1a73e8",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    ChangePassword: {
      screen: ChangePassword,
      navigationOptions: {
        title: "Change Password",
        headerStyle: {
          backgroundColor: "white"
        },
        headerTintColor: "#1a73e8",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    SavedHome: {
      screen: SavedHome,
      navigationOptions: {
        title: "Home Location",
        headerStyle: {
          backgroundColor: "white"
        },
        headerTintColor: "#1a73e8",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    SavedWork: {
      screen: SavedWork,
      navigationOptions: {
        title: "Work Location",
        headerStyle: {
          backgroundColor: "white"
        },
        headerTintColor: "#1a73e8",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    Loader: {
      screen: Loader,
      navigationOptions: {
        header: null
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
    AddPlaces: {
      screen: AddPlaces,
      navigationOptions: {
        title: "Add Favourite Places",
        headerStyle: {
          backgroundColor: "white"
        },
        headerTintColor: "#1a73e8",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    AddHomeWork: {
      screen: AddHomeWork,
      navigationOptions: {
        title: "Add Home & Work",
        headerStyle: {
          backgroundColor: "white"
        },
        headerTintColor: "#1a73e8",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    Bike: {
      screen: Bike,
      navigationOptions: {
        title: "",
        headerStyle: {
          backgroundColor: "white"
        },
        headerTintColor: "#1a73e8",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    AddBikeInfo: {
      screen: AddBikeInfo,
      navigationOptions: {
        title: "Add Bike Information",
        headerStyle: {
          backgroundColor: "white"
        },
        headerTintColor: "#1a73e8",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    AccountCreated: {
      screen: AccountCreated,
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
