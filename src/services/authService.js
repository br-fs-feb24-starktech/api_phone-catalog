const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { raw } = require('express');

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

const registerService = async (registerData) => {
  const { username, email, password } = registerData;

  const cryptPassword = await bcrypt.hash(password, 10);

  const newUser = {
    username,
    email,
    password: cryptPassword,
    role: 'user',
    avatar: null
  };

  const registeredUser = await User.create(newUser);

  return registeredUser;
}

module.exports = {
  loginService,
  registerService,
};
