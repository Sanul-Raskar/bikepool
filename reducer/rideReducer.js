import { SAVE_RIDE } from "../action/types";

const initialState = {
  rideData: null
};

export default function rideDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_RIDE:
      return {
        ...state,
        rideData: action.payload
      };

    default:
      return state;
  }
}
