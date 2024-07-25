const { Op } = require('sequelize');
const { Favourite, Product } = require('../models');

const getAllFavorites = async (userId) => {

  const ids = [];

  const favorites = await Favourite.findAll({
    attributes: ["productId"],
    where: { token: userId },
  })

  favorites.map(id => favoriteDetails(id));

  function favoriteDetails(id) {
    const {productId } = id;
    ids.push(productId);
  }

  const result = await Product.findAll({
    where: { id: ids },
  });

  return result;

}

const postFavorite = async (query) => {

  const { userId, productId } = query;

  const result = await Favourite.findOne({ where: { userId: userId, productId: productId } }).then(
    function (foundItem) {
      if (!foundItem) {
        return Favourite.create({
          userId: userId,
          productId: productId,
        });
      }
    },
  );

  return result;
}

const deleteFavorite = async (id, productId) => {

  const result = await Favourite.destroy({
    where: {
      userId: id,
      productId: productId
    }
  });

  return result;
}

module.exports = {
  getAllFavorites,
  postFavorite,
  deleteFavorite,
}