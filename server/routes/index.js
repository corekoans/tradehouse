const merchants = require('./merchant');
const consumers = require('./consumer');
const products = require('./product');

// TODO: authenticate routes

module.exports = (app) => {
  app.use('/api/merchants', merchants);
  app.use('/api/consumers', consumers);
  app.use('/api/products', products);
};
