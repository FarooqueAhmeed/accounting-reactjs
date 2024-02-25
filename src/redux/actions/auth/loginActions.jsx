import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './loginActionTypes';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const loginUser = (formData) => (dispatch) => {
  dispatch(loginRequest());

  api.post('/auth/login/', formData)
    .then(response => {
      const { data, status } = response;

      if (status === 200 && data && data.access) {
        const userData = {
          token: data.access,
          userDetails: {
            email: data.Email,
            firstName: data.first_name,
            userId: data['User ID'],
          },
          tokenExpiry: data.token_expiry,
          tokenIssuedAt: data.token_issued_at,
        };

        // Store user data in localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        dispatch(loginSuccess(userData));
        toast.success(`Welcome, ${userData.userDetails.firstName}. Login successful`);
      } else {
        const errorMessage = data?.error || 'An error occurred during login.';
        dispatch(loginFailure(errorMessage));
        toast.error(errorMessage);

        // Display detailed error messages if available
        if (data && data.error) {
          data.error.forEach((error) => {
            toast.error(error.message);
          });
        }
      }
    })
    .catch(error => {
      let errorMessage = 'An error occurred during login.';
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }
      dispatch(loginFailure(errorMessage));
      toast.error(errorMessage);

      // Additional logging for debugging purposes
      console.error('Error during login:', error.response?.data);
    });
};
