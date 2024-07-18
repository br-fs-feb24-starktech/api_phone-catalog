const { User } = require('../models');
const jwt = require('jsonwebtoken');

const loginService = async loginData => {
  const { email } = loginData;

  const user = await User.findOne({
    where: { email },
    raw: true,
  });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  const { password, ...userLogged } = user;

  return { user: userLogged, token };
};

module.exports = {
  loginService,
};
