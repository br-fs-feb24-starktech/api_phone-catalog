const express = require('express');
const router = express.Router();
const { getNewModels } = require('../controllers/phonesController');
const { getProducts, getProductById } = require('../controllers/pProductController');
const { validateQueryParams } = require('../middlewares');
const { getDiscountModels } = require('../controllers/dDiscountController');

router.get('/new-models', getNewModels);
router.get('/products', validateQueryParams, getProducts);
router.get('/products/:id', getProductById);
router.get('/discount-models', getDiscountModels);

module.exports = router;
