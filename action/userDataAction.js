import {
  FETCH_USERDATA_BEGINS,
  FETCH_USERDATA_SUCCESS,
  FETCH_USERDATA_ERROR,
  FETCH_HOME_BEGINS,
  FETCH_HOME_SUCCESS,
  FETCH_HOME_ERROR,
  DELETE_HOME,
  UPDATE_PROFILE_BEGINS,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR
} from "./types";

export const getloginedUser = () => {
  return async dispatch => {
    try {
      dispatch({ type: FETCH_USERDATA_BEGINS });

      const response = await fetch(
        "https://358e2951-b1fd-4977-874f-c488dee6a4ee.mock.pstmn.io/users/1"
      );
      const data = await response.json();
      console.log("Fetched Data:");
      console.log(data);
      dispatch({
        type: FETCH_USERDATA_SUCCESS,
        payload: data
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FETCH_USERDATA_ERROR,
        payload: error
      });
    }
  };
};

export const updateProfile = data => {
  return async dispatch => {
    try {
      dispatch({ type: UPDATE_PROFILE_BEGINS });
      console.log("Ready to send updated profile");
      console.log(data);
      /*Send data to server*/
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: data
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: UPDATE_PROFILE_ERROR,
        payload: error
      });
    }
  };
};

export const getHome = id => {
  return async dispatch => {
    try {
      dispatch({ type: FETCH_HOME_BEGINS });
      const response = await fetch(
        "https://my-json-server.typicode.com/Sanul-Raskar/fakeJsonServer-Bikepool/savedPlaces/?userID=" +
          id +
          "&name=Home"
      );

      const data = await response.json();
      console.log("Fetched Data:");
      console.log(data);
      dispatch({
        type: FETCH_HOME_SUCCESS,
        payload: data
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FETCH_HOME_ERROR,
        payload: error
      });
    }
  };
};

export const deleteHome = id => {
  return async dispatch => {
    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/Sanul-Raskar/fakeJsonServer-Bikepool/savedPlaces/?userID=" +
          id +
          "&name=Home",
        { method: "delete" }
      );
      const data = await response.json();
      console.log(data);
      dispatch({ type: DELETE_HOME });
    } catch (error) {
      console.log(error);
    }
  };
};
