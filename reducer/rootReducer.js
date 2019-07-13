import { combineReducers } from "redux";
import ViewProfile from "./reducer";
import RideReducer from "./rideReducer";
import HomeReducer from "./HomeReducer";


export default combineReducers({
  ViewProfile,
  RideReducer,
  HomeReducer
});
