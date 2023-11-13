const express = require("express");
const router = express.Router();

const homePage = require("../controllers");

router.post("/dummyData", homePage.postData);
router.get("/", homePage.getData);

module.exports = router;
