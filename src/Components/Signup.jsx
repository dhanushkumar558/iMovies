import { useNavigate } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div>
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
        <button className="buttons" onClick={() => navigate('/')}>
          Login
        </button>
      </div>
    </div>
  );
}
