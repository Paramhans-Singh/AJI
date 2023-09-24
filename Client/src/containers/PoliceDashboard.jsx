import React from 'react';
import { Link } from 'react-router-dom';

function PoliceDashboard() {
    return (
        <div>
            <h1>Police Dashboard</h1>
            <Link to="/police-profile">Profile</Link>
            <p>Welcome to the Police Dashboard.</p>
            
            {/* Link to the FIR creation page */}
            <Link to="/create-fir">Create a New FIR</Link>
        </div>
    );
}

export default PoliceDashboard;
