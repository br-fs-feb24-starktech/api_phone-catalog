const { loginService } = require('./authService');
const {
  getProductsService,
  getProductDetailsService,
  getRecommendedProductsService,
} = require('./productsService');

module.exports = {
  getProductsService,
  getProductDetailsService,
  loginService,
  getRecommendedProductsService,
};
