const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const phoneCatalogRoutes = require('./routes/phoneCatalogRoutes');
require('dotenv').config();
const models = require('./models');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

app.use('/', phoneCatalogRoutes);

// Sincronização manual dos modelos na ordem desejada
(async () => {
  try {
    // Inicialize a conexão com o banco de dados
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Sincronize cada modelo na ordem desejada
    await models.Category.sync();
    await models.Item.sync();
    await models.Product.sync();
    await models.User.sync();
    await models.Favourite.sync();
    await models.Order.sync();
    await models.Address.sync();

    console.log('All models were synchronized successfully.');

    // Inicie o servidor
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to synchronize the models:', error);
  }
})();
