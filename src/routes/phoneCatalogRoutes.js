const express = require('express');
const router = express.Router();
const { getNewModels } = require('../controllers/phonesController');
const { getDiscountModels } = require('../controllers/DiscountController');

router.get('/new-models', getNewModels);
router.get('/discount-models', getDiscountModels);

module.exports = router;
