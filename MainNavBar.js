import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import WomenLogin from './Women/WomenLogin';
import WomenSignup from './Women/WomenSignUp';
import WomenHome from './Women/WomenHome';
import MenLogin from "./Men/MenLogin";
import MenSignUp from './Men/MenSignUp';
import { PoliceLogin } from "./Police/PoliceLogin";
import PoliceSignup from './Police/PoliceSignUp';
import AdminLogin from './Admin/AdminLogin';
import Coverpage from './Coverpage';
import WomenChats from "./Women/WomenChats";

// Women-specific pages
import Defence from './Women/Defence';
import ReportIssue from './Women/ReportIssue';
import WCommunity from './Women/WCommunity';
import WomenProfile from './Women/WomenProfile';

// Men-specific pages
import MenHome from './Men/MenHome';
import Complaint from './Men/Complaint';
import YourPoints from "./Men/YourPoints";
import MenProfile from './Men/MenProfile';

// Police-specific pages
import PoliceHome from './Police/PoliceHome';
import PoliceProfile from './Police/PoliceProfile';
import PoliceCommunity from './Police/PCommunity';
import IssuePage from './Police/IssuePage';
import Notifications  from "./Police/Notifications"
import PoliceChats from "./Police/PoliceChats";


import "./NavBar.css";

export default function MainNavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const user = localStorage.getItem('user');
    const userRole = localStorage.getItem('userRole');
    setIsLoggedIn(!!user);
    setRole(userRole);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userRole');
    setIsLoggedIn(false);
    setRole(null);
    navigate('/women-login'); // Redirect after logout
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
            Voice4Her
          </Link>
        </div>
        <ul>
          {!isLoggedIn ? (
            <>
              <li><Link to="/women-login">Women Login</Link></li>
              <li><Link to="/men-login">Men Login</Link></li>
              <li><Link to="/police-login">Police Login</Link></li>
              <li><Link to="/Admin-Login">Admin Login</Link></li>
            </>
          ) : (
            <>
              {role === 'woman' ? (
                <>
                  <li><Link to="/women-home">Home</Link></li>
                  <li><Link to="/defence">Defence</Link></li>
                  <li><Link to="/report-issue">Report Issue</Link></li>
                  <li><Link to="/w-community">W-Community</Link></li>
                  <li><Link to="/women-profile">Profile</Link></li>
                </>
              ) : role === 'man' ? (
                <>
                  <li><Link to="/men-home">Home</Link></li>
                  <li><Link to="/complaint">Complaint</Link></li>
                  <li><Link to="/YourPoints">Points</Link></li>
                  <li><Link to="/men-profile">Profile</Link></li>
                </>
              ) : role === 'police' ? (
                <>
                  <li><Link to="/police-home">Home</Link></li>
                  <li><Link to="/police-community">Community</Link></li>
                  <li><Link to="/issue-page">Issues</Link></li>
                  <li><Link to="/police-notifications">Notifications</Link></li>
                  <li><Link to="/police-profile">Profile</Link></li>
                </>
              ) : (
                <li><Link to="/profile">Profile</Link></li>
              )}
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          )}
        </ul>
      </nav>

      {(
        location.pathname !== '/women-login' &&
        location.pathname !== '/women-signup' &&
        location.pathname !== '/men-login' &&
        location.pathname !== '/men-signup' &&
        location.pathname !== '/police-login' &&
        location.pathname !== '/police-signup' &&
        location.pathname !== '/Admin-Login' &&
        location.pathname !== '/profile') && (
          <div className="spacer"></div>
        )}

      <Routes>
        <Route path="/" element={<Coverpage />} />
        <Route path="/women-login" element={<WomenLogin />} />
        <Route path="/women-signup" element={<WomenSignup />} />
        <Route path="/women-home" element={<WomenHome />} />
        <Route path="/men-login" element={<MenLogin />} />
        <Route path="/men-signup" element={<MenSignUp />} />
        <Route path="/police-login" element={<PoliceLogin />} />
        <Route path="/police-signup" element={<PoliceSignup />} />
        <Route path="/Admin-Login" element={<AdminLogin />} />
        
        {/* Women-specific routes */}
        <Route path="/defence" element={<Defence />} />
        <Route path="/report-issue" element={<ReportIssue />} />
        <Route path="/w-community" element={<WCommunity />} />
        <Route path="/women-profile" element={<WomenProfile />} />
        <Route path="/chats" element={<WomenChats />} />

        {/* Men-specific routes */}
        <Route path="/men-home" element={<MenHome />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/YourPoints" element={<YourPoints />} />
        <Route path="/men-profile" element={<MenProfile />} />

        {/* Police-specific routes */}
        <Route path="/police-home" element={<PoliceHome />} />
        <Route path="/police-profile" element={<PoliceProfile />} />
        <Route path="/police-community" element={<PoliceCommunity />} />
        <Route path="/issue-page" element={<IssuePage />} />
        <Route path="/police-notification" element={<Notifications />} />
       
        <Route path="/policechats" element={<PoliceChats />} />

        
      </Routes>
    </div>
  );
}
