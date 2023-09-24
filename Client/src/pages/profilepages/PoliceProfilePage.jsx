import React from 'react';

const PoliceProfile = () => {

    const policeData = [
        {
          name: 'City Police Station',
          shoName: 'Officer A',
          address: '123 Main Street, City, Country',
          cases: [
            {
              caseNumber: '2023-56789',
              suspectName: 'John Doe',
              caseDetails: 'Investigation in progress',
            },
            {
              caseNumber: '2022-12345',
              suspectName: 'Jane Smith',
              caseDetails: 'Case closed, suspect arrested',
            },
            // Add more cases for this station
          ],
        },
        {
          name: 'Suburb Police Station',
          shoName: 'Officer B',
          address: '456 Elm Street, Suburb, Country',
          cases: [
            {
              caseNumber: '2023-98765',
              suspectName: 'Alice Johnson',
              caseDetails: 'Under investigation',
            },
            {
              caseNumber: '2023-54321',
              suspectName: 'Bob Wilson',
              caseDetails: 'Case closed, charges filed',
            },
            // Add more cases for this station
          ],
        },
        // Add more police stations as needed
      ];
      
      
      return (
          <div className="police-profile">
            {policeData.map((station) => (
              <div key={station.name}>
                <h1>{station.name} </h1>
                <p><strong>SHO Name:</strong> {station.shoName}</p>
                <p><strong>Address:</strong> {station.address}</p>
      
                <h2>Cases Handled by {station.name}:</h2>
                <ul>
                  {station.cases.map((caseData) => (
                    <li key={caseData.caseNumber}>
                      <strong>Case Number:</strong> {caseData.caseNumber}
                      <br />
                      <strong>Suspect Name:</strong> {caseData.suspectName}
                      <br />
                      <strong>Case Details:</strong> {caseData.caseDetails}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      };
      
  
export default PoliceProfile;
