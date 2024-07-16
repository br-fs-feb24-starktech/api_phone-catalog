const Address = require('./address');
const Category = require('./category');
const User = require('./user');
const Favourite = require('./favourite');
const Item = require('./item');
const Order = require('./order');
const Product = require('./product');


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
