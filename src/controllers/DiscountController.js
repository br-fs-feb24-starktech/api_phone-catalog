const getDiscountModels = async (req, res) => {
  try {
    const discountModels = await Phone.findAll({
      order: [
        ['fullPrice', 'DESC'],
      ],
      limit: 8,
    });
    res.json(discountModels);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch discount models' });
  }
};

module.exports = {
  getDiscountModels,
};