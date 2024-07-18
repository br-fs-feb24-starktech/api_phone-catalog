const express = require('express');
const router = express.Router();
const { getNewModels } = require('../controllers/phonesController');
const {
  getProducts,
  getProductById,
  getRecommendedFromProduct,
} = require('../controllers/productController');
const { validateQueryParams } = require('../middlewares');
const { getDiscountModels } = require('../controllers/discountController');
const { getFavorites, postNewFavorite } = require('../controllers/FavoritesController');

router.get('/new-models', getNewModels);
router.get('/products', validateQueryParams, getProducts);
router.get('/products/:id', getProductById);
router.get('/products/:id/recommended', getRecommendedFromProduct);
router.get('/discount-models', getDiscountModels);
router.get('/favorites/:user', getFavorites);
router.post('/favorites', postNewFavorite);

module.exports = router;
