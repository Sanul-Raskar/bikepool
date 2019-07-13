import {
    FETCH_HOME_BEGINS,
    FETCH_HOME_SUCCESS,
    FETCH_HOME_ERROR
  } from "../action/types";
  
  const initialState = {
    homeData: null,
    loading: true,
    error: null
  };
  
  export default function getHomeReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_HOME_BEGINS:
        return {
          ...state,
          loading: true,
          error: null,
          homeData:null
        };
  
      case FETCH_HOME_SUCCESS:
        return {
          ...state,
          loading: false,
          homeData: action.payload,
          error:null
        };
  
      case FETCH_HOME_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
          homeData:null
        };
  
      default:
        return state;
    }
  }