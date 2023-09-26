const Judge = require('../models/judgeModel'); 
const dummyJudge = require("../DummyData/JudgeDummy");

module.exports.getJudgeDetails = function(req,res){
    const judgeName = req.params.judgeName;

    const judgeData = dummyJudge.find((j) => j.judgeName === judgeName);
  
      if (!judgeData) {
        return res.status(404).json({ message: 'Judge not found' });
      }
  
    return res.json(judgeData);  
}

module.exports.getJudgeList = function(req,res){
    return res.json(dummyJudge);
}