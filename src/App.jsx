import { useState } from 'react';
import './App.css';
import Reset from './PasswordReset.jsx';
import Signup from './signup.jsx';
import './PasswordReset.css'

export default function App() {
  const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup
  const [isReset, setIsReset] = useState(false); // State to toggle between login and password reset
  const [username, setUsername] = useState(''); // State for username input field
  const [password, setPassword] = useState(''); // State for password input field
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const handleLogin = () => {
    // Basic validation to check if username or password is empty
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Please enter correct data');
    } else {
      setErrorMessage('');
      // Proceed with login logic (e.g., API call or navigation)
      console.log('Logged in successfully');
    }
  };

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
            <input
              type="text"
              className="input-field"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Handle username change
            />
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Handle password change
            />
          </div>

          {/* Reset Password */}
          <p className="reset-password" onClick={() => setIsReset(true)}>Reset Password</p> {/* Click to toggle to Reset Password */}

          {/* Buttons for Login and Sign Up */}
          <div className="button-container">
            <button className="button" onClick={handleLogin}>Login</button>
            <button className="button" onClick={() => setIsSignup(true)}>Sign Up</button> {/* Toggle to Signup */}
          </div>

          {/* Error Message */}
          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Show error message if exists */}
        </div>
      )}
    </>
  );
}
