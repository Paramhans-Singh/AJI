import React from 'react';

const JudgeProfile = () => {
    
    const judgeData = {
        name: 'Judge Smith',
        photoSrc: 'path/to/judge-photo.jpg',
        qualifications: 'LL.M. in Law, 20 years of judicial experience',
        cases: [
          {
            caseNumber: '2023-56789',
            dateOfHearing: 'July 15, 2023',
            // Other case details
          },
          {
            caseNumber: '2022-12345',
            dateOfHearing: 'December 10, 2022',
            // Other case details
          },
          // Add more cases here
        ],
      };
      
  return (
    <div className="judge-profile">
      <h1>{judgeData.name}'s Profile</h1>
      <img src={judgeData.photoSrc} alt={judgeData.name} className="profile-photo" />

      <h2>Qualifications:</h2>
      <p>{judgeData.qualifications}</p>

      <h2>Cases Presided Over:</h2>
      <ul>
        {judgeData.cases.map((caseData) => (
          <li key={caseData.caseNumber}>
            <strong>Case Number:</strong> {caseData.caseNumber}
            <br />
            <strong>Date of Hearing:</strong> {caseData.dateOfHearing}
            <br />
            {/* Other case details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JudgeProfile;
