import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CaseDetailsPage() {
  const { caseId } = useParams();
  const [caseDetails, setCaseDetails] = useState(null);

  useEffect(() => {
    // Fetch case details using caseId (e.g., from an API)
    // Update the caseDetails state with the fetched data
    // Example: fetch(`/api/cases/${caseId}`)
    //   .then(response => response.json())
    //   .then(data => setCaseDetails(data))
    //   .catch(error => console.error('Error fetching case details:', error));

    // For now, simulating case details with sample data
    setCaseDetails({
      id: caseId,
      name: 'Sample Case',
      description: 'This is a sample case.',
      // Add more case details here
    });
  }, [caseId]);

  if (!caseDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="case-details">
      <h3>Case Details</h3>
      <p>ID: {caseDetails.id}</p>
      <p>Name: {caseDetails.name}</p>
      <p>Description: {caseDetails.description}</p>
      {/* Add more case details here */}
    </div>
  );
}

export default CaseDetailsPage;
