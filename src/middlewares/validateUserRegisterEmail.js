const { User } = require('../models');

const validateUserRegisterEmail = async (req, res, next) => {
  const { email } = req.body;

  const emailExists = await User.findOne({
    where: { email },
    raw:true,
  });

  if (emailExists) {
    return res.status(400).json({ error: 'Email already exists' });
  }

  return next();
}

module.exports = validateUserRegisterEmail;