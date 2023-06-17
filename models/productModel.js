//model logic interacts with database / data
const products = require('../data/products');
const { writeDataToFile } = require('../utils');

// find all products
const findAll = async () => products;

//find a single product
const findById = async (id) => {
  const product = products.find((product) => product.id === parseInt(id));
  return product;
};

//create new product
const addProduct = async (product) => {
  const newProduct = { id: Date.now(), ...product };
  products.push(newProduct);
  writeDataToFile('./data/products.json', products);
  return newProduct;
};

//edit product
const editProduct = async (id, product) => {
  const index = products.findIndex((product) => product.id === parseInt(id));
  products[index] = { id: id, ...product };
  writeDataToFile('./data/products.json', products);
  return products[index];
};

module.exports = { findAll, findById, addProduct, editProduct };
