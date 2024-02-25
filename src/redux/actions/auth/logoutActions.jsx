import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api';
import { LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE } from './logoutActionTypes';

export const logoutRequest = () => ({
  type: LOG_OUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: LOG_OUT_SUCCESS,
});

export const logoutFailure = (error) => ({
  type: LOG_OUT_FAILURE,
  payload: error,
});

export const logoutUser = () => (dispatch, getState) => {
  dispatch(logoutRequest());

  // Retrieve token from localStorage
  const token = localStorage.getItem('token');

  // Remove token from localStorage
  localStorage.removeItem('token');
  
  // Remove user data from localStorage
  localStorage.removeItem('userData');

  api.post('/auth/logout/', null, {
    headers: {
      Authorization: `Bearer ${token}` // Include the token in the headers
    }
  })
    .then(response => {
      const message = response.data?.message || 'Logout successful';
      dispatch(logoutSuccess());
      toast.success(message);
    })
    .catch(error => {
      let errorMessage = 'An error occurred during logout.';
      if (error.response && error.response.data && error.response.data.detail) {
        errorMessage = error.response.data.detail;
      }
      dispatch(logoutFailure(errorMessage));
      toast.error(errorMessage);

      // Additional logging for debugging purposes
      console.error('Error during logout:', error.response?.data);
    });
};
