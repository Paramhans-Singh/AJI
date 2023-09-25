const caseDummy = [
    {
      caseNumber: "CASE-001",
      fillingNumber: "FILL-001",
      CNRnumber: "CNR-001",
      caseTitle: "The State vs. John Doe",
      caseType: "Criminal",
      caseParties: ["The State", "John Doe"],
      caseFilingDate: new Date("2023-01-15"),
      caseStatus: "Pending",
      nextHearingDate: new Date("2023-02-15"),
      judicialOfficer: "5fbd8f9c7f1fbb0021f6cb65", // Replace with a valid Judge ObjectId
      advocates: ["Advocate A", "Advocate B"],
      partiesInvolved: ["Witness X", "Witness Y"],
      caseDisposition: "In Progress",
      documentsFiled: ["Document 1", "Document 2"],
    },
    {
      caseNumber: "CASE-002",
      fillingNumber: "FILL-002",
      CNRnumber: "CNR-002",
      caseTitle: "Smith vs. Johnson",
      caseType: "Civil",
      caseParties: ["Smith", "Johnson"],
      caseFilingDate: new Date("2023-02-10"),
      caseStatus: "Closed",
      nextHearingDate: null,
      judicialOfficer: "5fbd8f9c7f1fbb0021f6cb66", // Replace with a valid Judge ObjectId
      advocates: ["Advocate C", "Advocate D"],
      partiesInvolved: ["Witness Z"],
      caseDisposition: "Resolved",
      documentsFiled: ["Document 3"],
    },
    // Add more dummy case data as needed
  ];
  
  module.exports = caseDummy;
  