// Import necessary React and React Router components
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, createBrowserRouter, Routes, RouterProvider} from 'react-router-dom';
import LeavePage from '../pages/FormPages/LeavePage';
import ReschedulePage from '../pages/FormPages/ReschedulePage';
import CaseDetailsPage from '../pages/cases/CaseDetailsPage';


// Create a functional component for the Dashboard Header
function DashboardHeader() {
  return (
    <header>
      <div className="user-profile">
        <img src="profile-image.jpg" alt="User Profile" />
        <h2>Lawyer Dashboard</h2>
        <Link to="/lawyer-profile">Profile</Link>
      </div>
      <div className="actions">
        <Link to="/leave" className="action-button">Leave</Link>
        <Link to="/reschedule" className="action-button">Reschedule</Link>
      </div>
    </header>
  );
}

// Create a functional component for the Case Schedule
function CaseSchedule() {
  // Dummy case data for demonstration
  const cases = [
    { id: 1, name: 'Case 1', number: '12345', time: '9:00 AM', location: 'Courtroom 1' },
    { id: 2, name: 'Case 2', number: '67890', time: '10:30 AM', location: 'Courtroom 2' },
    // Add more case data here
  ];

  return (
    <div className="case-schedule">
      <h2>Today's Case Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Time</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((caseItem, index) => (
            <tr key={index}>
              <td key={caseItem.id}>
                 <Link to={`/cases/${caseItem.id}`}>{caseItem.name}</Link>
              </td>
              <td>{caseItem.number}</td>
              <td>{caseItem.time}</td>
              <td>{caseItem.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


function LawyerDashboard() {
    
      return (
        <div className="lawyer">
           <DashboardHeader />
           <Routes>
           <Route path="/" element={<CaseSchedule />} />
           <Route path="/leave" element={<LeavePage />} />
           <Route path="/reschedule" element={<ReschedulePage />} />
           <Route path="/cases/:caseId" element={<CaseDetailsPage />} /> 
          </Routes>
        </div>
      )
  }

export default LawyerDashboard;
