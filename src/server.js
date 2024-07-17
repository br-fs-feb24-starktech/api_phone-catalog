const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const phoneCatalogRoutes = require('./routes/phoneCatalogRoutes');
require('dotenv').config();
const models = require('./models');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

app.use('/', phoneCatalogRoutes);
app.use('/img', express.static(path.join(__dirname, 'public')));

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await models.Item.sync();
    await models.Product.sync();
    await models.User.sync();
    await models.Favourite.sync();
    await models.Order.sync();
    await models.Address.sync();

    console.log('All models were synchronized successfully.');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to synchronize the models:', error);
  }
})();
