//model logic interacts with database / data
const products = require('../data/products');
const { v4: uuidv4 } = require('uuid');

// find all products
const findAll = async () => products;

//find a single product
const findById = async (id) => {
  const product = products.find((product) => product.id === id);
  return product;
};

//create new product
const createProduct = async (product) => {
  const newProduct = { id: uuidv4, ...product };
  products.push(newProduct);
};

module.exports = { findAll, findById, createProduct };
