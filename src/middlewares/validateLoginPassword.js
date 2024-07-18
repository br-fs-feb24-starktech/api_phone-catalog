const { User } = require('../models');
const bcrypt = require('bcryptjs');

const validateLoginPassword = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: { email },
    raw:true,
  });

  const cryptPassword = user.password;

  const isValidPassword = await bcrypt.compare(password, cryptPassword);

  if (!isValidPassword) {
    return res.status(404).json({ error: 'Email or password not exists' });
  }

  return next();
}

module.exports = validateLoginPassword;