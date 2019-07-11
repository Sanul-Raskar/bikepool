import { combineReducers } from "redux";
import ViewProfile from "./reducer";
import RideReducer from "./rideReducer";

export default combineReducers({
  ViewProfile,
  RideReducer
});
