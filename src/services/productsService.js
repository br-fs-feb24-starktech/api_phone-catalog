const { Product, Item } = require('../models');
const systemMessages = require('../config/systemMessages');
const { Op } = require('sequelize');

const getProductsService = async filters => {
  let { category, page, limit, sort, search } = filters;

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

  if (search) {
    options.where.name = {
      [Op.iLike]: `%${search}%`,
    };
  }

  const { rows: productsFromCategory, count: totalItems } = await Product.findAndCountAll(options);

  const totalPages = Math.ceil(totalItems / limit);

  if (productsFromCategory.length === 0) {
    return new Error(systemMessages.PRODUCTS.PRODUCT_NOT_FOUND);
  }

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

const shuffledArray = array => {
  const shuffle = array.slice();

  for (let i = shuffle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
  }

  return shuffle;
};

const getRecommendedProductsService = async itemId => {
  const limit = 8;

  const product = await Product.findOne({
    where: {
      itemId,
    },
  });

  const recommendedProducts = await Product.findAll({
    where: {
      id: {
        [Op.gt]: product.id,
      },
    },
    limit,
    order: [['id', 'ASC']],
  });

  if (!recommendedProducts) {
    return new Error(systemMessages.PRODUCTS.PRODUCT_NOT_FOUND);
  }

  const recommendedProductsList = recommendedProducts.map(product => product.toJSON());
  const suffledList = shuffledArray(recommendedProductsList);

  return suffledList;
};

module.exports = {
  getProductsService,
  getProductDetailsService,
  getRecommendedProductsService,
};
