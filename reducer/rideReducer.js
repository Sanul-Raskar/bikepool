import {
  SAVE_RIDE,
  CURRENT_LOCATION_ERROR,
  GET_CURRENT_LOCATION
} from "../action/types";

const initialState = {
  rideData: null,
  userCurrentLocation: null
};

export default function rideDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_RIDE:
      return {
        ...state,
        rideData: action.payload
      };

    case GET_CURRENT_LOCATION:
      return {
        ...state,
        userCurrentLocation: action.payload
      };

    default:
      return state;
  }
}
