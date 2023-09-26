const mongoose = require("mongoose");
const JudgeNew = require("../models/judgeModel"); // Replace with the correct path to your model file

const dummyJudgeData = [
    {
      judgeName: "Justice Srivastav",
      specialization: "Criminal Law",
      yearsOfExperience: 15,
      court: "District Court",
      roomAddress: "123 Main Street, Cityville",
      photograph: "judge_smith.jpg",
      casesHandling: ["Case 1", "Case 2", "Case 3"],
      rating: 4.5,
      availability: {
        monday: "9:00 AM - 5:00 PM",
        tuesday: "9:00 AM - 5:00 PM",
        wednesday: "9:00 AM - 5:00 PM",
        thursday: "9:00 AM - 5:00 PM",
        friday: "9:00 AM - 5:00 PM",
      },
      bookedDetails: {
        bookedDate: "2023-09-30",
        bookedTime: "2:00 PM",
        caseName: "Case 4",
      },
    },
    {
      judgeName: "Justice Patel",
      specialization: "Family Law",
      yearsOfExperience: 10,
      court: "Family Court",
      roomAddress: "456 Oak Avenue, Townsville",
      photograph: "judge_johnson.jpg",
      casesHandling: ["Case 5", "Case 6", "Case 7"],
      rating: 4.0,
      availability: {
        monday: "10:00 AM - 6:00 PM",
        tuesday: "10:00 AM - 6:00 PM",
        wednesday: "10:00 AM - 6:00 PM",
        thursday: "10:00 AM - 6:00 PM",
        friday: "10:00 AM - 6:00 PM",
      },
      bookedDetails: {
        bookedDate: "2023-10-05",
        bookedTime: "3:30 PM",
        caseName: "Case 6",
      },
    },
    // Add more dummy judge data as needed
    {
      judgeName: "Justice Pandey",
      specialization: "Criminal Law",
      yearsOfExperience: 20,
      court: "District Court",
      roomAddress: "789 Pine Street, Villageton",
      photograph: "judge_williams.jpg",
      casesHandling: ["Case 8", "Case 9", "Case 10"],
      rating: 4.5,
      availability: {
        monday: "9:00 AM - 5:00 PM",
        tuesday: "9:00 AM - 5:00 PM",
        wednesday: "9:00 AM - 5:00 PM",
        thursday: "9:00 AM - 5:00 PM",
        friday: "9:00 AM - 5:00 PM",
      },
      bookedDetails: {
        bookedDate: "2023-09-30",
        bookedTime: "2:00 PM",
        caseName: "Case 4",
      },
    },
    {
      judgeName: "Justice Sukheja",
      specialization: "Family Law",
      yearsOfExperience: 15,
      court: "Family Court",
      roomAddress: "1011 Elm Avenue, Hamletville",
      photograph: "judge_jones.jpg",
      casesHandling: ["Case 11", "Case 12", "Case 13"],
      rating: 4.0,
      availability: {
        monday: "10:00 AM - 6:00 PM",
        tuesday: "10:00 AM - 6:00 PM",
        wednesday: "10:00 AM - 6:00 PM",
        thursday: "10:00 AM - 6:00 PM",
        friday: "10:00 AM - 6:00 PM",
      },
      bookedDetails: {
        bookedDate: "2023-10-05",
        bookedTime: "3:30 PM",
        caseName: "Case 6",
      },
    },
    {
      judgeName: "Justice Sachdeva",
      specialization: "Criminal Law",
      yearsOfExperience: 25,
      court: "District Court",
      roomAddress: "1213 Main Street, Cityville",
      photograph: "judge_brown.jpg",
      casesHandling: ["Case 14", "Case 15", "Case 16"],
      rating: 4.5,
      availability: {
        monday: "9:00 AM - 5:00 PM",
        tuesday: "9:00 AM - 5:00 PM",
        wednesday: "9:00 AM - 5:00 PM",
        thursday: "9:00 AM - 5:00 PM",
        friday: "9:00 AM - 5:00 PM",
      },
      bookedDetails: {
        bookedDate: "2023-09-30",
        bookedTime: "2:00 PM",
        caseName: "Case 4",
      },
    }
  ];
  
  module.exports = dummyJudgeData;
  

  // JudgeNew.insertMany(dummyJudgeData)
  //   .then(() => {
  //     console.log("Dummy Judge inserted successfully");
  //   })
  //   .catch((error) => {
  //     console.error("Error inserting dummy judge:", error);
  //   });
