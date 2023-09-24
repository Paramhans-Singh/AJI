import React from 'react';
import { Link } from 'react-router-dom';
// import './PublicDashboard.css'; 

const PublicDashboard = () => {
    const  userName = "Param";
  return (
    <div className="public-dashboard">
      <h1>Welcome, {userName}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/public-profile">Profile</Link>
          </li>
          <li>
            <Link to="/general-info">General Info</Link>
          </li>
          <li>
            <Link to="/case-search">Case Search</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PublicDashboard;
