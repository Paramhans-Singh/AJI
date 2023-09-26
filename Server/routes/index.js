const express = require('express');
const router = express.Router();
const homeController = require("../controllers/homeController");
const judgeController = require("../controllers/judgeController");
const caseController = require("../controllers/caseController");

router.get('/', homeController.home);
router.get("/judge/:judgeName",judgeController.getJudgeDetails);
router.get("/case/:caseNumber", caseController.getCaseDetails);
router.get("/cases", caseController.getCaseList);
router.get("/judges", judgeController.getJudgeList);

// router.get("/auth",);
// router.get("/users",);


console.log('router loaded');

module.exports = router;