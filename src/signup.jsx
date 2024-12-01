import './signup.css';
export default function Signup({ setIsSignup }) {
  return (
    <>
      <div className="header">
        <p className="title">iMovies - Your Destination to find Movies</p>
      </div>

      {/* Input Fields for Signup */}
      <div className="input-container">
        <input type="text" className="input-field" placeholder="Enter Username" />
        <input type="password" className="input-field" placeholder="Enter Password" />
        <input type="email" className="input-field" placeholder="Enter Email" />
        <input type="text" className="input-field" placeholder="Enter Mobile Number" />
        <input type="password" className="input-field" placeholder="Confirm Password" />
      </div>

      {/* Buttons for Signup */}
      <div className="button-container">
        <button className="buttons">Signup</button>
        {/* Button to navigate back to Login */}
        <button className="buttons" onClick={() => setIsSignup(false)}>Login</button>  {/* Navigate to Login */}
      </div>
    </>
  );
}
