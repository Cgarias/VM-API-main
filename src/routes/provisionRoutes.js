const express = require("express");
const router = express.Router();
const provisionController = require("../controllers/provisionController");

// Endpoint para aprovisionar VMs
router.post("/provision", provisionController.provisionVM);

module.exports = router;
