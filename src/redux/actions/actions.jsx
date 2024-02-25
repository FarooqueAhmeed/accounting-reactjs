// actions.jsx
import api from '../services/api';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from './ActionTypes';

export const registerRequest = () => ({
    type: REGISTER_REQUEST,
  });
  
  export const registerSuccess = (data) => ({
    type: REGISTER_SUCCESS,
    payload: data,
  });
  
  export const registerFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: error,
  });
  
  export const registerUser = (userData) => (dispatch) => {
    dispatch(registerRequest());
    api.post('/auth/register/', userData)
      .then(response => {
        dispatch(registerSuccess(response.data));
      })
      .catch(error => {
        console.error('Error in registerUser action:', error.response.data);
        dispatch(registerFailure(error.response.data));
      });
  };
