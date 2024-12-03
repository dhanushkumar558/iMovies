import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import PasswordReset from './Components/PasswordReset';
import Homepage from './Components/Homepage'; // Import the Homepage component

export default function App() {
  return (
    <Router>
      <div className="header">
        <p className="title">iMovies - Your Destination to Find Movies</p>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<PasswordReset />} />
        <Route path="/homepage" element={<Homepage />} /> {/* Homepage route */}
      </Routes>
    </Router>
  );
}
