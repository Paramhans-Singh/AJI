import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CaseDetailsPage from '../pages/cases/CaseDetailsPage';


const  Dashboard= () => {
  
  const profileData = {
    name: 'Param',
    photoSrc: 'path/to/photo.jpg',
  };
  return (
    <div className="dashboard">
      <h1>Welcome, {profileData.name}</h1>
      <img src={profileData.photoSrc} alt={profileData.name} className="profile-photo" />
      <br/>
      <Link to={`/party-profilepage`}>Pofile Page</Link>
      </div>
)};

const  Cases= () => {

  const CaseData = {
    cases: [
      {
        caseNumber: '2023-56789',
      },
      {
        caseNumber: '2022-12345',
      },
      {
        caseNumber: '2023-98765',
      },
    ],
  };

  return(
    <div>
      <h2>Cases Filed Against You:</h2>
      <ul>
        {CaseData.cases.map((caseData) => (
          <li key={caseData.caseNumber}>
            <Link to={`/case/${caseData.caseNumber}`}>
              Case Number: {caseData.caseNumber}
            </Link>
          </li>
        ))}
    </ul>
    </div>
  )};   


  function PartyDashboard() {
    return (
                <div className="party">
                   <Dashboard />
                  <Routes>
                   <Route path="/" element={<Cases />} />
                   <Route path="/case/:caseNumber" element={<CaseDetailsPage />} /> 
                  </Routes>
                </div>
  );
};

export default PartyDashboard;
