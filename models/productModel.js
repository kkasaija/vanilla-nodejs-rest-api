//Model logic interacts with database / data
let products = require('../data/products');
const { writeDataToFile } = require('../utils');

//Find all products
const findAll = async () => products;

//Find a single product
const findById = async (id) => {
  const product = products.find((product) => product.id === parseInt(id));
  return product;
};

//Create new product
const addProduct = async (product) => {
  const newProduct = { id: Date.now(), ...product };
  products.push(newProduct);
  writeDataToFile('./data/products.json', products);
  return newProduct;
};

//Edit product
const editProduct = async (id, product) => {
  const index = products.findIndex((product) => product.id === parseInt(id));
  products[index] = { id: id, ...product };
  writeDataToFile('./data/products.json', products);
  return products[index];
};

//Remove product
const removeProduct = async (id) => {
  writeDataToFile(
    './data/products.json',
    products.filter((product) => product.id !== parseInt(id))
  );
  return;
};

module.exports = { findAll, findById, addProduct, editProduct, removeProduct };
