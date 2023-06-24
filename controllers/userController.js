const { pool } = require('../db_connection');

const getUsers = async (req, res) => {
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

const getUser = async (req, res) => {
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

const createUser = async (req, res) => {
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

const updateUser = async (req, res) => {
  const user = req.body;
  try {
    const query = `UPDATE users SET email = '${user.email}', firstname = '${user.firstname}', lastname = '${user.lastname}', age = '${user.age}' WHERE id = ${req.params.id}`;
    pool.query(query, (err, data) => {
      if (!err) {
        res.send('Successfully Updated');
      } else throw err;
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const query = `DELETE FROM users WHERE id = ${id}`;
    pool.query(query, (err, data) => {
      if (!err) {
        res.send('User deletion succeeded!');
      } else throw err;
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteAllUsers = async (req, res) => {
  try {
    const query = 'DELETE FROM users';
    pool.query(query, (err, data) => {
      if (!err) {
        res.send('Deletion success!');
      } else throw err;
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
};
