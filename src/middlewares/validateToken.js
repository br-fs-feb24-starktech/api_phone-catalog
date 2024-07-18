const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res
        .status(401)
        .json({ error: 'To access this feature a valid authentication token must be sent.' });
    }

    const token = authorization.split(' ')[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.decoded = decoded;

    return next();
  } catch (error) {
    return res
      .status(401)
      .json({ error: 'To access this feature a valid authentication token must be sent.' });
  }
};

module.exports = validateToken;
