const systemMessages = require('../config/systemMessages');

const CategoryEnum = {
  PHONES: 'phones',
  TABLETS: 'tablets',
  ACCESSORIES: 'accessories',
};

const isValidCategory = value => {
  return Object.values(CategoryEnum).includes(value);
};

const validateQueryParams = (req, res, next) => {
  const { sort, category } = req.query;

  if (sort && sort !== 'price' && sort !== 'name' && sort !== 'year') {
    return res.status(400).json({ error: systemMessages.PRODUCTS.INVALID_SORT_CONTENT });
  }

  if (category && !isValidCategory(category)) {
    console.log('entrou aqui');
    return res.status(404).send({ error: systemMessages.PRODUCTS.INVALID_CATEGORY });
  }

  return next();
}

module.exports = validateQueryParams;