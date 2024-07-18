const { User } = require('../models');

const validateIfEmailNotExists = async (req, res, next) => {
  const { email } = req.body;

  const emailExists = await User.findOne({
    where: { email },
    raw:true,
  });

  if (!emailExists) {
    return res.status(404).json({ error: 'Email or password not exists' });
  }

  return next();
}

module.exports = validateIfEmailNotExists;