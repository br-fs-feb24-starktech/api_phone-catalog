const { getProductsService } = require('../services');

const getProducts = async (req, res) => {
  try {
    const products = await getProductsService(req.query);

    if (products instanceof Error) {
      return res.status(404).json({error: products.message});
    }
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getProducts,
};
