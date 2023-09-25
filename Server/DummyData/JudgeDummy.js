const dummyJudgeData = [
    {
      judgeName: "Judge Smith",
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
      judgeName: "Judge Johnson",
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
  ];
  
  module.exports = dummyJudgeData;
  