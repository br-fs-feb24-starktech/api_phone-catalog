const { loginController, registerController } = require('./authController');
const { getProducts, getProductById } = require('./productController');

module.exports = {
  getProducts,
  getProductById,
  loginController,
  registerController,
};
