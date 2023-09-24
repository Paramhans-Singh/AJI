import React from 'react';
import { useParams } from 'react-router-dom';

const PartyProfilePage = () => {
  // Example profile data with personal details
  const profileData = {
    name: 'Param',
    photoSrc: 'path/to/photo.jpg',
    phoneNumber: '123-456-7890',
    address: '123 Main Street, City, Country',
    cases: [
      {
        caseNumber: '2023-56789',
        dateFiled: 'July 15, 2023',
        charges: 'Assault and Battery',
        details: 'Incident occurred at XYZ location on June 30, 2023.',
      },
      {
        caseNumber: '2022-12345',
        dateFiled: 'December 10, 2022',
        charges: 'Theft',
        details: 'Stolen property valued at $5,000 recovered on March 1, 2023.',
      },
      {
        caseNumber: '2023-98765',
        dateFiled: 'March 5, 2023',
        charges: 'Burglary',
        details: 'Alleged break-in at ABC residence on February 28, 2023.',
      },
    ],
  };

  return (
    <div className="profileData-profile">
      <h1>{profileData.name}'s Profile</h1>
      <img src={profileData.photoSrc} alt={profileData.name} className="profile-photo" />

      <h2>Contact Information:</h2>
      <p>
        <strong>Phone Number:</strong> {profileData.phoneNumber}
        <br />
        <strong>Address:</strong> {profileData.address}
      </p>

      <h2>Cases Filed Against {profileData.name}:</h2>
      <ul>
        {profileData.cases.map((caseData) => (
          <li key={caseData.caseNumber}>
            <strong>Case Number:</strong> {caseData.caseNumber}
            <br />
            <strong>Date Filed:</strong> {caseData.dateFiled}
            <br />
            <strong>Charges:</strong> {caseData.charges}
            <br />
            <strong>Details:</strong> {caseData.details}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartyProfilePage;
