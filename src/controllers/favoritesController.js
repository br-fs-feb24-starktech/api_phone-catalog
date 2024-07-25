const { getAllFavorites, postFavorite, deleteFavorite } = require("../services/favoritesService");

const getFavorites = async (req, res) => {

  try {
    const favorites = await getAllFavorites(req.params.user);
      
    if (favorites instanceof Error) {
      return res.status(404).json({ error: 'Failed to fetch favorites' });
    }
  
    res.status(200).json(favorites);
  
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const postNewFavorite = async (req, res) => {
  try {
    const favorite = await postFavorite(req.body);

    if (favorite instanceof Error) {
      return res.status(404).json({ error: 'Failed to add favorites' });
    }

    res.status(200).json(favorite);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteUserFavorite = async (req, res) => {
  try {
    const favorite = await deleteFavorite(req.params.id, req.query.productId);

    if (favorite instanceof Error) {
      return res.status(404).json({ error: 'Failed to delete favorite' });
    }

    res.status(200).json(favorite);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getFavorites,
  postNewFavorite,
  deleteUserFavorite,
}