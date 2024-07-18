const { loginController } = require('./authController');
const { getProducts, getProductById } = require('./productController');

module.exports = {
  getProducts,
  getProductById,
  loginController,
};
