const { loginController } = require('./authController');
const { getProducts, getProductById } = require('./ProductsController');

module.exports = {
  getProducts,
  getProductById,
  loginController,
};
