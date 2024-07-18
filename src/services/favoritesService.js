const { Favourite } = require('../models');

const getAllFavorites = async (userId) => {

  const favorites = await Favourite.findAll({
    where: {userId: userId},
    limit: 8,
  });

  return favorites;
}

const postFavorite = async (query) => {

  const { userId, productId } = query;

  const result = await Favourite.create({
    userId: userId,
    productId: productId,
  });

  return result;
}

const deleteFavorite = async (query) => {

  const { userId, productId } = query;

  const result = await Favourite.destroy({
    where: {
      userId: userId,
      productId: productId,
    },
  });

  return result;
}

module.exports = {
  getAllFavorites,
  postFavorite,
  deleteFavorite,
}