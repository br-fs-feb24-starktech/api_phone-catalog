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

const getProductById = (req, res) => {
  const productId = req.params.id;

  //Query do banco de dados
  const product = productsDetails.find((product) => product.id === productId);

  if (!product) {
    return res.status(404).send({ error: SystemMessages.PRODUCTS.PRODUCT_NOT_FOUND });
  }

  res.json(product);
};

module.exports = {
  getProducts,
  getProductById,
};
