import { SAVE_RIDE } from "./types";

export const saveRideDetails = data => {
  return dispatch => {
    dispatch({
      type: SAVE_RIDE,
      payload: data
    });
  };
};
