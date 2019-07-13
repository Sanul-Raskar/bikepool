import {
  FETCH_USERDATA_BEGINS,
  FETCH_USERDATA_SUCCESS,
  FETCH_USERDATA_ERROR
} from "../action/types";

const initialState = {
  userData: null,
  loading: true,
  error: null
};

export default function getUserDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERDATA_BEGINS:
      return {
        ...state,
        loading: true,
        error: null,
        userData:null
      };

    case FETCH_USERDATA_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        error:null
      };

    case FETCH_USERDATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        userData:null
      };

    default:
      return state;
  }
}