import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Login Form */}
      <div className="input-container">
        <input type="text" className="input-field" placeholder="Enter Username" />
        <input type="password" className="input-field" placeholder="Enter Password" />
      </div>

      {/* Reset Password */}
      <p className="reset-password" onClick={() => navigate('/reset')}>
        Reset Password
      </p>

      {/* Buttons for Login and Sign Up */}
      <div className="button-container">
        <button className="button">Login</button>
        <button className="button" onClick={() => navigate('/signup')}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
