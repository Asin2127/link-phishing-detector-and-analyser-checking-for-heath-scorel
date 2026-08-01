const express = require('express');
const { scanUrl } = require('../backend/controllers/scanController');

const router = express.Router();

router.post('/scan', scanUrl);

module.exports = router;
