import React from 'react';
import { Link } from 'react-router-dom';
import Navig from './navigation';
import { useSelector } from 'react-redux';

const Home = () => {
  console.log('Home component rendered');

  // Define email outside of the if block
  let email = '';

  const userDataString = localStorage.getItem('userData');
  if (userDataString) {
    const userData = JSON.parse(userDataString);
    const token = userData.token;
    // Access the email property within userDetails
    email = userData.userDetails.email; // Assign value to email variable
    // Now you have the token, you can use it as needed
    console.log('Token:', token);
  } else {
    // Handle the case where userData is not found in localStorage
    console.error('User data not found in localStorage');
  }

  return (
    <>
      <Navig />
      <h1> home page </h1>
      {email && <p>User Email: {email}</p>}
    </>
  );
};

export default Home;
