const express = require('express');
const router = express.Router();
const { getNewModels } = require('../controllers/phonesController');

router.get('/new-models', getNewModels);

module.exports = router;
