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
const createProduct = async (req, res) => {
  const user = req.body;
  const query = `INSERT INTO users(email, firstname, lastname, age) VALUES('${user.email}', '${user.firstname}', '${user.lastname}', '${user.age}')`;
  try {
    await pool.query(query, (err, data) => {
      if (!err) {
        res.send('User addition success!');
      } else throw err;
    });
  } catch (error) {
    console.error(error);
  }
};
const updateProduct = async (req, res) => {};
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM`;
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
