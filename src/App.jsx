import { useState } from 'react';
import './App.css';
import Reset from './PasswordReset.jsx';
import Signup from './signup.jsx';


export default function App() {
  const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup
  const [isReset, setIsReset] = useState(false); // State to toggle between login and password reset

  return (
    <>
      <div className="header">
        <p className="title">iMovies - Your Destination to find Movies</p>
      </div>

      {isReset ? (
        <Reset setIsReset={setIsReset} /> // Render Password Reset component when isReset is true
      ) : isSignup ? (
        <Signup setIsSignup={setIsSignup} /> // Render Signup component when isSignup is true
      ) : (
        <div>
          {/* Login Form */}
          <div className="input-container">
            <input type="text" className="input-field" placeholder="Enter Username" />
            <input type="password" className="input-field" placeholder="Enter Password" />
          </div>

          {/* Reset Password */}
          <p className="reset-password" onClick={() => setIsReset(true)}>Reset Password</p> {/* Click to toggle to Reset Password */}

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
