const express = require('express');
const router = express.Router();
const { getNewModels } = require('../controllers/phonesController');
const { getProducts, getProductById } = require('../controllers/ProductsController');
const { validateQueryParams } = require('../middlewares');
const { getDiscountModels } = require('../controllers/DiscountController');

router.get('/new-models', getNewModels);
router.get('/products', validateQueryParams, getProducts);
router.get('/products/:id', getProductById);
router.get('/discount-models', getDiscountModels);

module.exports = router;
