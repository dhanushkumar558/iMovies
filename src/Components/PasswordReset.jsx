import { useNavigate } from 'react-router-dom';
import './PasswordReset.css';

export default function PasswordReset() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Rectangle 2 */}
      <div className="rectangle"></div>

      {/* Instruction */}
      <div className="instruction">
        To Reset the Password, Please enter Email/Mobile
      </div>

      {/* Input Field */}
      <div className="input-container">
        <input type="text" className="input-field" placeholder="Enter Email/Mobile" />
      </div>

      {/* Buttons */}
      <div className="button-container4">
        <button className="button4">Submit</button>
        <button className="button4" onClick={() => navigate('/')}>
          Back to Login
        </button>
      </div>
    </div>
  );
}
