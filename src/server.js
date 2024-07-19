const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const { phoneCatalogRouter, authRouter } = require('./routes');
require('dotenv').config();
const models = require('./models');
const path = require('path');
const { FORCE } = require('sequelize/lib/index-hints');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

const publicPath = path.join(__dirname, '..', 'public');

app.use('/img', express.static(path.join(publicPath, 'img')));

app.use('/', phoneCatalogRouter);
app.use('/login', authRouter);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await models.Item.sync({ force: true });
    await models.Product.sync({ force: true });
    await models.User.sync({ force: true });
    await models.Favourite.sync({ force: true });
    await models.Order.sync({ force: true });
    await models.Address.sync({ force: true });

    console.log('All models were synchronized successfully.');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to synchronize the models:', error);
  }
})();
