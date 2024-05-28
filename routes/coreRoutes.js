const express = require('express');
const router = express.Router();
const coreController = require('../controllers/coreController');

router.get('/', coreController.coreFunction)

module.exports = router