const { Product, Item } = require('../models');
const systemMessages = require('../config/systemMessages');

const getProductsService = async filters => {
  let { category, page, limit, sort } = filters;

  page = parseInt(page) || 1;
  limit = parseInt(limit) || 16;

  let order;

  if (sort === 'price') {
    order = [['price', 'ASC']];
  } else if (sort === 'name') {
    order = [['name', 'ASC']];
  } else {
    order = [['year', 'DESC']];
  }

  const offset = (page - 1) * limit;

  const options = { order, limit, offset };

  if (category) {
    options.where = { category };
  }

  const { rows: productsFromCategory, count: totalItems } = await Product.findAndCountAll(options);

  const totalPages = Math.ceil(totalItems / limit);

  if (page > totalPages) {
    return new Error(systemMessages.PRODUCTS.INVALID_PAGE_NUMBER);
  }

  return {
    page,
    limit,
    totalPages,
    totalItems,
    products: productsFromCategory,
  };
};

const getProductDetailsService = async id => {
  const query = {
    where: {
      id,
    },
  };
  const product = await Item.findOne(query);

  if (!product) {
    return new Error(systemMessages.PRODUCTS.PRODUCT_NOT_FOUND);
  }

  return product;
};

module.exports = {
  getProductsService,
  getProductDetailsService,
};
