const { Pool } = require('pg');
require('dotenv').config();

const connectDb = async (string) => {
  try {
    const pool = new Pool({
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT,
    });

    const client = await pool.connect();
    const res = await client.query(string);
    //console.log(res);
    for (let row of res.rows) {
      console.log(row);
    }
    await pool.end();
  } catch (error) {
    console.log(error);
  }
};

const query = `SELECT * FROM users`;

// const query = `
// INSERT INTO users (email, firstName, lastName, age)
// VALUES ('johndoe@gmail.com', 'john', 'doe', 21)
// `;

connectDb(query);
