import {
  SAVE_RIDE,
  GET_CURRENT_LOCATION,
  CURRENT_LOCATION_ERROR
} from "./types";

export const saveRideDetails = data => {
  return dispatch => {
    dispatch({
      type: SAVE_RIDE,
      payload: data
    });
  };
};

export const getCurrentLocation = () => {
  return dispatch => {
    try {
      let userCurrentLocation = { currentLat: 0, currentLng: 0 };

      navigator.geolocation.getCurrentPosition(
        position => {
          userCurrentLocation.currentLat = position.coords.latitude;
          userCurrentLocation.currentLng = position.coords.longitude;
          dispatch({
            type: GET_CURRENT_LOCATION,
            payload: userCurrentLocation
          });
        },
        error => {
          dispatch({
            type: CURRENT_LOCATION_ERROR,
            payload: error.message
          });
          console.log(error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 7000,
          maximumAge: 10000
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
};
