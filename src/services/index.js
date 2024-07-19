const { loginService, registerService } = require('./authService');
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
  registerService,
};
