const express = require('express');
const router = express.Router();
const { getNewModels } = require('../controllers/phonesController');
const { getProducts, getProductById } = require('../controllers/productController');
const { validateQueryParams } = require('../middlewares');
const { getDiscountModels } = require('../controllers/discountController');
const { getFavorites, postNewFavorite } = require('../controllers/FavoritesController');

router.get('/new-models', getNewModels);
router.get('/products', validateQueryParams, getProducts);
router.get('/products/:id', getProductById);
router.get('/discount-models', getDiscountModels);
router.get('/favorites', getFavorites);
router.post('/favorites', postNewFavorite);

module.exports = router;
