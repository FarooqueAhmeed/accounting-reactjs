import { LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE } from '../../actions/auth/logoutActionTypes';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  isLoading: false,
};

const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_OUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        isLoading: false,
        error: null,
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default logoutReducer;
