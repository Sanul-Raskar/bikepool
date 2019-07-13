import {
  FETCH_USERDATA_BEGINS,
  FETCH_USERDATA_SUCCESS,
  FETCH_USERDATA_ERROR,
  FETCH_HOME_BEGINS,
  FETCH_HOME_SUCCESS,
  FETCH_HOME_ERROR
} from "./types";

export const getloginedUser = () => {
  return async dispatch => {
    try {
      const response = await fetch(
        "https://358e2951-b1fd-4977-874f-c488dee6a4ee.mock.pstmn.io/users/1"
      );
      dispatch({ type: FETCH_USERDATA_BEGINS });
      const data = await response.json();
      console.log("Fetched Data:");
      console.log(data);
      dispatch({
        type: FETCH_USERDATA_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: FETCH_USERDATA_ERROR,
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
      dispatch({
        type: FETCH_HOME_ERROR,
        payload: error
      });
    }
  };
};