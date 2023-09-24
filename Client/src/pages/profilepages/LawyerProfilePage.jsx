import React from 'react';

const LawyerProfilePage = () => {
  // Dummy data for the profile
  const profileData = {
    name: 'Param',
    address: 'Anytown, London',
    email: 'param@email.com',
    phone: '9845213620',
    occupation: 'At Law',
    lawFirm: 'ABC Associates',
    license: 'License #12345',
    yearsOfPractice: '15 years',
    cases: [
      {
        caseNumber: '2023-12345',
        dateFiled: 'April 5, 2023',
        pending: true,
        hirings: [
          {
            hiringDate: 'May 15, 2023',
            client: 'Jane Smith',
            purpose: 'Representation in a personal injury claim',
          },
          {
            hiringDate: 'June 10, 2023',
            client: 'John Smith',
            purpose: 'Representation in a property dispute',
          },
        ],
      },
      {
        caseNumber: '2022-98765',
        dateFiled: 'November 10, 2022',
        pending: true,
        hirings: [
          {
            hiringDate: 'December 1, 2022',
            client: 'Sarah Johnson',
            purpose: 'Representation in a divorce case',
          },
          {
            hiringDate: 'February 20, 2023',
            client: 'Mark Johnson',
            purpose: 'Representation in a child custody dispute',
          },
        ],
      },
      {
        caseNumber: '2023-54321',
        dateFiled: 'March 1, 2023',
        pending: true,
        hirings: [
          {
            hiringDate: 'March 15, 2023',
            client: 'James Brown',
            purpose: 'Representation in a criminal defense case',
          },
        ],
      },
    ],
  };

  return (
    <div className="profile-page">
      <h1>{profileData.name}</h1>
      <h3>Personal Information:</h3>
      <p>
        Address:{profileData.address}<br/>
        Email:{profileData.email}, <br/>
        Phone: {profileData.phone}
      </p>

      <p>
        <h3>Professional Information:</h3>
        Occupation: {profileData.occupation}
        <br />
        Law Firm: {profileData.lawFirm}
        <br />
        Bar Association License: {profileData.license}
        <br />
        Years of Practice: {profileData.yearsOfPractice}
      </p>

      <h2>List of Cases Handled:</h2>
      <ul>
        {profileData.cases.map((caseData) => (
          <li key={caseData.caseNumber}>
            <strong>Case:</strong> {caseData.caseNumber}
            <br />
            <strong>Date Filed:</strong> {caseData.dateFiled}
            <br />
            <strong>Conclusions:</strong> {caseData.pending ? 'Ongoing' : 'Closed'}
            <ul>
              {caseData.hirings.map((hiring) => (
                <li key={hiring.hiringDate}>
                  <strong>Hiring Date:</strong> {hiring.hiringDate}
                  <br />
                  <strong>Client:</strong> {hiring.client}
                  <br />
                  <strong>Purpose:</strong> {hiring.purpose}
                </li>
              ))}
            </ul>
            <hr/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LawyerProfilePage;
