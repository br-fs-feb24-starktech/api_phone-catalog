const { loginService } = require('./authService');
const { getProductsService, getProductDetailsService } = require('./productsService');

module.exports = {
  getProductsService,
  getProductDetailsService,
  loginService,
};
