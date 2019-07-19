import {
  UPDATE_PROFILE_BEGINS,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR
} from "../action/types";

const initialState = {
  userUpdatedData: null,
  loading: true,
  error: null
};

export default function getUserDataReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROFILE_BEGINS:
      return {
        ...state,
        loading: true,
        error: null,
        userUpdatedData: null
      };

    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        userUpdatedData: action.payload,
        error: null
      };

    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        userUpdatedData: null
      };

    default:
      return state;
  }
}
