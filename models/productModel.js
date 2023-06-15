//model logic interacts with database / data
const products = require('../data/products');

const findAll = async () => products;

const findById = async (id) => {
  const product = products.find((product) => product.id === id);
  return product;
};

module.exports = { findAll, findById };
