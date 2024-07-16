// const { Phone } = require('../models');

const getNewModels = async (req, res) => {
  try {
    const newModels = await Phone.findAll({
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

module.exports = {
  getNewModels,
};

