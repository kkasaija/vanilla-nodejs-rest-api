//model logic interacts with database / data
const products = require("../data/products");

const findAll = async () => products;

module.exports = { findAll };
