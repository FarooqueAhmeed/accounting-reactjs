// RegistrationForm.js
import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/actions/actions';
import ErrorMessageComponent from './ErrorMessageComponent';
import LoadingIndicatorComponent from './LoadingIndicatorComponent';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { CATEGORY_CHOICES } from './constants/Categories';
import { COUNTRIES_CHOICES,LANGUAGES_CHOICES } from './constants/COUNTRIES_and_LANGUAGES';
import { COUNTRY_CODES_CHOICES } from './constants/country_codes';
import Navig from './Layout/navigation';


const RegistrationForm = () => {
    console.log("Form ")
    const dispatch = useDispatch();
    const registration = useSelector(state => state.registration);
  
    const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      phone: '',
      password: '',
      email: '',
      country_code: '',
      company_headquarters: '',
      language: '',
  
    });
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      dispatch(registerUser(formData));
    };
  
    useEffect(() => {
      if (registration.data) {
        // Accessing specific properties from the data object
        const { data, message } = registration.data;
      
        // Check if data is defined and contains first_name
        if (data && data.first_name) {
          const { first_name } = data;
      
          // Display success toast
          console.log('Data: ', registration.data);
      
          toast.success(`${message}, ${first_name}`, { position: 'top-right', autoClose: 5000 });
        } else {
          // Handle the case where first_name is not present
          toast.success(message, { position: 'top-right', autoClose: 5000 });
        }
      }
      
      console.log('Component mounted. Registration error:', registration.error);
      // Display error toasts here
      if (registration.error) {
        Object.values(registration.error).forEach((messages) => {
          if (Array.isArray(messages)) {
            messages.forEach((msg) => {
              toast.error(msg, { position: 'top-right', autoClose: 5000 });
            });
          } else {
            toast.error(messages, { position: 'top-right', autoClose: 5000 });
          }
        });
      }
    }, [registration.data,registration.error]);
      
      


      
    return (
      <>
        <Navig/>
        <h2>Registration Form</h2>

        <LoadingIndicatorComponent loading={registration.loading} title="Registration" />

        {registration.error && (
      <ErrorMessageComponent error={registration.error} title="Registration failed" />
    )}

        {registration.data && <p>Registration successful!</p>}
        <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>

        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>





        <label>
          Country Code:
          <select
            name="country_code"
            value={formData.country_code}
            onChange={handleInputChange}
            key="countryCodeSelect"
          >
            <option value="" disabled>Select Country Code</option>
            {COUNTRY_CODES_CHOICES.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>

        <label>
          Company Headquarters:
          <select
            name="company_headquarters"
            value={formData.company_headquarters}
            onChange={handleInputChange}
            key="companyHeadquartersSelect"
          >
            <option value="" disabled>Select Company Headquarters</option>
            {COUNTRIES_CHOICES.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>

        <label>
          Language:
          <select
            name="language"
            value={formData.language}
            onChange={handleInputChange}
            key="languageSelect"
          >
            <option value="" disabled>Select Language</option>
            {LANGUAGES_CHOICES.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>




          <button type="submit">Register</button>
        </form>
      </>
    );
  };
  
  export default RegistrationForm;


