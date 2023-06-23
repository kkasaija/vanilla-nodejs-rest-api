const { pool } = require('../db_connection');

const getProducts = async (req, res) => {
  try {
    const query = 'SELECT * FROM users';
    await pool.query(query, (err, data) => {
      if (!err) {
        res.send(data.rows);
      } else throw err;
    });
  } catch (error) {
    console.error(error);
  }
};
const getProduct = async (req, res) => {
  try {
    const query = `SELECT * FROM users WHERE id = ${req.params.id}`;
    await pool.query(query, (err, data) => {
      if (!err) {
        res.send(...data.rows);
      } else throw err;
    });
  } catch (error) {
    console.error(error);
  }
};
const createProduct = async (req, res) => {};
const updateProduct = async (req, res) => {};
const deleteProduct = async (req, res) => {};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
