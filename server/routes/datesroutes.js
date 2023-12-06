const express = require("express");
const router = express.Router();
const datesController = require('../controllers/DatesController');

router.get("/", datesController.getDates);
router.post("/", datesController.addDate);

module.exports = router