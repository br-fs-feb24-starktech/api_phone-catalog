const Address = require('./Address');
const Category = require('./Category');
const User = require('./User');
const Favourite = require('./Favourite');
const Item = require('./Item');
const Order = require('./Order');
const Product = require('./Product');


const models = {
  Address,
  Category,
  Favourite,
  Item,
  Order,
  Product,
  User,
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = models;
