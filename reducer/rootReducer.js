import { combineReducers } from "redux";
import ViewProfile from "./reducer";
import RideReducer from "./rideReducer";
import HomeReducer from "./HomeReducer";
import UpdateProfile from "./UpdateProfileReducer"


export default combineReducers({
  ViewProfile,
  RideReducer,
  HomeReducer,
  UpdateProfile
});
