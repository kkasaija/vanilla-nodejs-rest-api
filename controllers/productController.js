const { findAll } = require("../models/productModel");

const getProducts = async (req, res) => {
  try {
    const products = await findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getProducts };
