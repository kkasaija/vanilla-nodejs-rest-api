//This is the entry point of the application
const express = require('express');
const app = express();

app.use(express.json());
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
} = require('./controllers/userController');

app.get('/users', getUsers);
app.get('/users/:id', getUser);
app.post('/users', createUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);
app.delete('/users', deleteAllUsers);

// check if port is occupied or use it instead
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
