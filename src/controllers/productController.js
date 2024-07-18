const {
  getProductsService,
  getProductDetailsService,
  getRecommendedProductsService,
} = require('../services');
const { Product } = require('../models');

const getProducts = async (req, res) => {
  try {
    const products = await getProductsService(req.query);

    if (products instanceof Error) {
      return res.status(404).json({ error: products.message });
    }
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await getProductDetailsService(req.params.id);

    if (product instanceof Error) {
      return res.status(404).json({ error: product.message });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getRecommendedFromProduct = async (req, res) => {
  try {
    const recommendedProducts = await getRecommendedProductsService(req.params.id);

    if (recommendedProducts instanceof Error) {
      return res.status(404).json({ error: recommendedProducts.message });
    }
    res.status(200).json(recommendedProducts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getNewModels = async (req, res) => {
  try {
    const newModels = await Product.findAll({
      order: [
        ['year', 'DESC'],
        ['fullPrice', 'DESC'],
      ],
      limit: 8,
    });
    res.json(newModels);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch new models' });
  }
};

const getDiscountModels = async (req, res) => {
  try {
    const discountModels = await Product.findAll({
      order: [['fullPrice', 'DESC']],
      limit: 8,
    });
    res.json(discountModels);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch discount models' });
  }
};

module.exports = {
  getProducts,
  getProductById,
  getRecommendedFromProduct,
  getNewModels,
  getDiscountModels,
};
