const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  getRecommendedFromProduct,
  getDiscountModels,
  getNewModels,
} = require('../controllers/productController');
const { validateQueryParams, validateToken } = require('../middlewares');
const { getDiscountModels } = require('../controllers/discountController');
const { getFavorites, postNewFavorite } = require('../controllers/favoritesController');

router.get('/new-models', getNewModels);
router.get('/products', validateQueryParams, getProducts);
router.get('/products/:id', getProductById);
router.get('/products/:id/recommended', getRecommendedFromProduct);
router.get('/discount-models', getDiscountModels);
router.get('/favorites/:user', validateToken, getFavorites);
router.post('/favorites', postNewFavorite);
router.delete('/favorites/:id', deleteUserFavorite);

module.exports = router;
