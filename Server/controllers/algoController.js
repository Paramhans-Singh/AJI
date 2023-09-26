module.exports.scheduleCases = async function (req, res) {
  try {
    // Fetch all cases and judges
    const cases = await Case.find().sort({
      priority: -1,
      predictedHearings: 1,
    });
    const judges = await Judge.find();

    // Initialize judge schedules
    judges.forEach((judge) => {
      judge.schedule = [];
    });

    // Define a function to check judge availability
    const isJudgeAvailable = (judge, caseObj) => {
      // Add your availability checking logic here
      // You may need to consider judge's current schedule, predicted hearings, etc.
      return true; // Placeholder; replace with your logic
    };

    // Assign cases to judges based on availability and priority
    for (const caseObj of cases) {
      let assigned = false;
      for (const judge of judges) {
        if (isJudgeAvailable(judge, caseObj)) {
          judge.schedule.push(caseObj);
          caseObj.judicialOfficer = judge._id;
          await caseObj.save();
          assigned = true;
          break;
        }
      }
      if (!assigned) {
        // Handle unassigned cases (e.g., log or notify)
      }
    }
    //ML Model fetching
    axios.post("http://localhost:8000/", { cases });

    return res.json({ message: "Cases scheduled successfully" });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
