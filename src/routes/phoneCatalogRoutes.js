const express = require('express');
const router = express.Router();
const { getNewModels } = require('../controllers/phonesController');
const { getProducts } = require('../controllers/ProductsController');
const { validateQueryParams } = require('../middlewares');

router.get('/new-models', getNewModels);
router.get('/products', validateQueryParams, getProducts);

module.exports = router;
