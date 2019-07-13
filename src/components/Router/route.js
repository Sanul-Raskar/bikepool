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
import AddHome from "../EditProfile/addHome";
import AddWork from "../EditProfile/addWork";
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
import AccountCreated from "../SignUp/AccountCreated";
import SignUpWizard from "../SignUp/SignUpWizard";
import Search from "../Search/Search";
import ViewBikeInfo from "../Profile/BikeInfo"

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

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    this.props.navigation.navigate(userToken ? "App" : "Auth");
  };

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
    Search: {
      screen: Search,
      navigationOptions: {
        title: "Search",
        headerStyle: {
          backgroundColor: "white"
        },
        headerTintColor: "#1a73e8",
        headerTitleStyle: {
          fontWeight: "bold"
        }
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
    ViewBikeInfo: {
      screen: ViewBikeInfo,
      navigationOptions: {
        title: "Saved Bikes",
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
    SignUpWizard: {
      screen: SignUpWizard,
      navigationOptions: {
        title: "Sign Up",
        headerStyle: {
          backgroundColor: "white"
        },
        headerTintColor: "#1a73e8",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }
    },
    AddPlaces: {
      screen: AddPlaces,
      navigationOptions: {
        header: null
      }
    },
    AddHomeWork: {
      screen: AddHomeWork,
      navigationOptions: {
        header: null
      }
    },
    Bike: {
      screen: Bike,
      navigationOptions: {
        header: null
      }
    },
    AddBikeInfo: {
      screen: AddBikeInfo,
      navigationOptions: {
        header: null
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
