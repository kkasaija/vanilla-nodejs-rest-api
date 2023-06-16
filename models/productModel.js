//model logic interacts with database / data
const products = require('../data/products');
const { v4: uuidv4 } = require('uuid');
const { writeDataToFile } = require('../utils');

// find all products
const findAll = async () => products;

//find a single product
const findById = async (id) => {
  const product = products.find((product) => product.id === id);
  return product;
};

//create new product
const addProduct = async (product) => {
  console.log('product: ', product);
  const newProduct = { id: uuidv4(), ...product };
  products.push(newProduct);
  writeDataToFile('./data/products.json', products);
  return newProduct;
};

module.exports = { findAll, findById, addProduct };
