// store.js
import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './reducers/reducers';
import authReducer from './reducers/auth/login';
import logoutReducer from './reducers/auth/logout';

const store = configureStore({
  reducer: {
    registration: registrationReducer,
    auth: authReducer,
    logout:logoutReducer,
    
  },
});

export default store;
