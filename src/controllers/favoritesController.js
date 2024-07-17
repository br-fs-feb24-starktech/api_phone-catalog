const { getAllFavorites, postFavorite } = require("../services/favoritesService");

const getFavorites = async (req, res) => {
  try {
    const favorites = await getAllFavorites(req.query);
    
    if (favorites instanceof Error) {
      return res.status(404).json({error: 'Failed to fetch favorites models'});
    }

    res.status(200).json(favorites);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

const postNewFavorite =  async (req, res) => {
    try {
      const favorite = await postFavorite(req.query);
      
      if (favorite instanceof Error) {
        return res.status(404).json({error: 'Failed to add favorites'});
      }
  
      res.status(200).json(favorite);
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

module.exports = {
  getFavorites,
  postNewFavorite,
}