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