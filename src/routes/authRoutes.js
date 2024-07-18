const { Router } = require('express');
const { loginController } = require('../controllers');
const {
  validateLoginFields,
  validateEmailFormat,
  validateIfEmailNotExists,
  validateLoginPassword,
} = require('../middlewares');

const authRouter = Router();

authRouter.post(
  '/',
  validateLoginFields,
  validateEmailFormat,
  validateIfEmailNotExists,
  validateLoginPassword,
  loginController,
);

module.exports = authRouter;
