//This is the entry point of the application
const http = require('http');
const url = require('url');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('./controllers/productController');

//Create server
const server = http.createServer((req, res) => {
  if (req.url === '/products' && req.method === 'GET') {
    getProducts(req, res);
  }

  //RegEx to determine which product to fetch
  else if (req.url.match(/\/products\/[0-9]+/) && req.method === 'GET') {
    const id = req.url.split('/')[2];
    getProduct(req, res, id);
  }

  //Create product
  else if (req.url === '/products' && req.method === 'POST') {
    createProduct(req, res);
  }

  //Update product
  else if (req.url.match(/\/products\/[0-9]+/) && req.method === 'PUT') {
    const id = req.url.split('/')[2];
    updateProduct(req, res, id);
  }

  //Delete product
  else if (req.url.match(/\/products\/[0-9]+/) && req.method === 'DELETE') {
    const id = req.url.split('/')[2];
    deleteProduct(req, res, id);
  }

  // If no route matches
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not found' }));
  }
});

// check if port is occupied or use it instead
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
