const { Favourite } = require('../models');

const getAllFavorites = async (userId) => {
  const result = await Favourite.findAll({
    where: {userId : userId},
    order: ['createdAt', 'DESC']
  });

  return result;
}

const postFavorite = (userId, productId) => {
  const result = Favourite.create({
    userId,
    productId,
  });

  return result;
}

module.exports = {
  getAllFavorites,
  postFavorite,
}