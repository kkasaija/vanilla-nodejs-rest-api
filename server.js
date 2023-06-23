//This is the entry point of the application
const express = require('express');
const app = express();

app.use(express.json());
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('./controllers/productController');

app.get('/users', getProducts);
app.get('/users/:id', getProduct);
app.post('/users', createProduct);
app.put('/users/:id', updateProduct);
app.delete('/users/:id', deleteProduct);

// check if port is occupied or use it instead
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
