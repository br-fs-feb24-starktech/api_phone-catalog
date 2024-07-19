const { Router } = require('express');
const { loginController, registerController } = require('../controllers');
const {
  validateLoginFields,
  validateEmailFormat,
  validateIfEmailNotExists,
  validateLoginPassword,
} = require('../middlewares');

const authRouter = Router();

authRouter.post(
  '/login',
  validateLoginFields,
  validateEmailFormat,
  validateIfEmailNotExists,
  validateLoginPassword,
  loginController,
);

authRouter.post(
  '/register',
  registerController
);

module.exports = authRouter;
