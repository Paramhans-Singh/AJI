const mongoose = require("mongoose");
const CaseNew = require("../models/caseModel"); // Replace with the correct path to your model file

const dummyCases = [
  {
    caseNumber: "CASE001",
    fillingNumber: "FILLING001",
    CNRnumber: "CNR001",
    caseTitle: "Criminal Case 1",
    caseType: "criminal",
    caseParties: ["Party A", "Party B"],
    caseFilingDate: new Date("2023-01-15"),
    caseStatus: "Pending",
    nextHearingDate: new Date("2023-02-15"),
    judicialOfficer: "65108639ef2f25e7730d61f6", // You can replace this with a valid ObjectID
    advocates: ["Advocate 1", "Advocate 2"],
    partiesInvolved: ["Party A", "Party B"],
    caseDisposition: "Open",
    documentsFiled: ["Document 1", "Document 2"],
    PredictedHearings: 2,
    SectionList: [379],
    ActsList: ["The Indian Penal Code"],
  },
  {
    caseNumber: "CASE002",
    fillingNumber: "FILLING002",
    CNRnumber: "CNR002",
    caseTitle: "Civil Case 1",
    caseType: "civil",
    caseParties: ["Accused 1", "Complainant 1"],
    caseFilingDate: new Date("2023-02-20"),
    caseStatus: "In Progress",
    nextHearingDate: new Date("2023-03-20"),
    judicialOfficer:"65108650ef2f25e7730d61f7", // You can replace this with a valid ObjectID
    advocates: ["Defense Attorney 1", "Prosecutor 1"],
    partiesInvolved: ["Accused 1", "Complainant 1"],
    caseDisposition: "Open",
    documentsFiled: ["Evidence 1", "Evidence 2"],
    PredictedHearings: 3,
    SectionList: [96],
    ActsList: ["CODE OF CIVIL PROCEDURE, 1908 (HB)"],
  },
  {
    caseNumber: "CASE003",
    fillingNumber: "FILLING003",
    CNRnumber: "CNR003",
    caseTitle: "Criminal Case 2",
    caseType: "criminal",
    caseParties: ["Party C", "Party D"],
    caseFilingDate: new Date("2023-03-10"),
    caseStatus: "Closed",
    judicialOfficer:"65108659ef2f25e7730d61f8", // You can replace this with a valid ObjectID
    advocates: ["Advocate 3", "Advocate 4"],
    partiesInvolved: ["Party C", "Party D"],
    caseDisposition: "Settled",
    documentsFiled: ["Document 3", "Document 4"],
    PredictedHearings: 1,
    SectionList: [457],
    ActsList: ["Code of Criminal Procedure"],
  },
  {
    caseNumber: "CASE004",
    fillingNumber: "FILLING004",
    CNRnumber: "CNR004",
    caseTitle: "Civil Case 2",
    caseType: "civil",
    caseParties: ["Accused 2", "Complainant 2"],
    caseFilingDate: new Date("2023-04-05"),
    caseStatus: "In Progress",
    nextHearingDate: new Date("2023-05-05"),
    judicialOfficer: "651087abef2f25e7730d61ff", // You can replace this with a valid ObjectID
    advocates: ["Defense Attorney 2", "Prosecutor 2"],
    partiesInvolved: ["Accused 2", "Complainant 2"],
    caseDisposition: "Open",
    documentsFiled: ["Evidence 3", "Evidence 4"],
    PredictedHearings: 4,
    SectionList: [24],
    ActsList: ["CODE OF CIVIL PROCEDURE, 1908 (HB)"],
  },
  {
    caseNumber: "CASE005",
    fillingNumber: "FILLING005",
    CNRnumber: "CNR005",
    caseTitle: "Criminal Case 3",
    caseType: "criminal",
    caseParties: ["Party E", "Party F"],
    caseFilingDate: new Date("2023-05-20"),
    caseStatus: "Pending",
    nextHearingDate: new Date("2023-06-20"),
    judicialOfficer: "651087abef2f25e7730d61ff", // You can replace this with a valid ObjectID
    advocates: ["Advocate 5", "Advocate 6"],
    partiesInvolved: ["Party E", "Party F"],
    caseDisposition: "Open",
    documentsFiled: ["Document 5", "Document 6"],
    PredictedHearings: 0,
    SectionList: [420],
    ActsList: ["The Indian Penal Code"],
  },
];

module.exports = dummyCases;

CaseNew.insertMany(dummyCases)
    .then(() => {
      console.log("Dummy cases inserted successfully");
    })
    .catch((error) => {
      console.error("Error inserting dummy cases:", error);
    });
