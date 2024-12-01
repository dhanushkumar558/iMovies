import { useState } from 'react';
import './App.css';

import Signup from './signup.jsx'; // Import Signup component

export default function App() {
  const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup

  return (
    <>
      <div className="header">
        <p className="title">iMovies - Your Destination to find Movies</p>
      </div>

      {isSignup ? (
        <Signup setIsSignup={setIsSignup} /> // Pass setIsSignup to toggle between signup and login
      ) : (
        <div>
          {/* Login Form */}
          <div className="input-container">
            <input type="text" className="input-field" placeholder="Enter Username" />
            <input type="password" className="input-field" placeholder="Enter Password" />
          </div>

          {/* Reset Password */}
          <p className="reset-password">Reset Password</p>

          {/* Buttons for Login and Sign Up */}
          <div className="button-container">
            <button className="button">Login</button>
            <button className="button" onClick={() => setIsSignup(true)}>Sign Up</button> {/* Toggle to Signup */}
          </div>
        </div>
      )}
    </>
  );
}
