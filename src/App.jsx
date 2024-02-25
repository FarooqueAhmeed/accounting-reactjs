//app.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import RegistrationForm from './components/RegistrationForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Layout/home';
import Login from './components/login';

function App() {
  return (
    <Router>
      <Provider store={store}>
       
          <ToastContainer />
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<RegistrationForm />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      
      </Provider>
    </Router>
  );
}

export default App;
