const { Router } = require('express');
const { loginController, registerController } = require('../controllers');
const {
  validateLoginFields,
  validateEmailFormat,
  validateIfEmailNotExists,
  validateLoginPassword,
  validadeUserRegisterFields,
  validateUserRegisterEmail,
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
  validadeUserRegisterFields,
  validateEmailFormat,
  validateUserRegisterEmail,
  registerController
);

module.exports = authRouter;
