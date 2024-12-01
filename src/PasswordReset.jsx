import React from 'react';
import './App.css'; 
 // Assuming the CSS is in App.css

function Reset({ setIsReset }) {
  return (
    <div>
      {/* Rectangle 2 */}
      <div className="rectangle"></div>

      {/* To Reset the Password, Please enter Email/Mobile */}
      <div className="instruction">To Reset the Password, Please enter Email/Mobile</div>

      {/* Input Field */}
      <div className="input-container">
        <input type="text" className="input-field" placeholder="Enter Email/Mobile" />
      </div>

      {/* Button */}
      <div className="button-container">
        <button className="button">Submit</button>
        <button className="button" onClick={() => setIsReset(false)}>Back to login</button> {/* Go back to login */}
      </div>
    </div>
  );
}

export default Reset;
