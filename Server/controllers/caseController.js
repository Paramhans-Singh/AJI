const dummyCases = require('../DummyData/CaseDummy'); 

module.exports.getCaseDetails = function(req,res){
    const {caseNumber} = req.params;

    // Find the case in your dummy data by caseNumber
    const caseData = dummyCases.find((c) => c.caseNumber === caseNumber);
  
    if (!caseData) {
      return res.status(404).json({ error: 'Case not found' });
    }
  
    // Send the case data as JSON
    return res.json(caseData);
}

module.exports.getCaseList = function(req,res){
  // send all the cases as array of objects
  return res.json(dummyCases);
}

// Prediction wali Algorithm

module.exports.predictHearings = function(req,res){
  const {caseNumber} = req.params;

  const body = {
    caseNumber: caseNumber,
    SectionList: [],
    ActsList: [],
  }







  axios.post('http://localhost:5000/predict', {
    caseNumber: caseNumber
  });
}
