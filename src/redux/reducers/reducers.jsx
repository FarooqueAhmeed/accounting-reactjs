// reducers.js
import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
  } from '../actions/ActionTypes';
  
  const initialState = {
    loading: false,
    data: null,
    error: null,
  };
  
  const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_REQUEST:
        return { ...state, loading: true, error: null };
      case REGISTER_SUCCESS:
        return { ...state, loading: false, data: action.payload, error: null };
      case REGISTER_FAILURE:
        return { ...state, loading: false, data: null, error: action.payload };
      default:
        return state;
    }
  };
  
  export default registrationReducer;