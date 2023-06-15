//This is the entry point of the application
const http = require('http');
const fs = require('fs');
const url = require('url');
const { getProducts, getProduct } = require('./controllers/productController');

//create server
const server = http.createServer((req, res) => {
  const path_name = url.parse(req.url).pathname;
  if (path_name === '/products' && req.method === 'GET') {
    getProducts(req, res);
  } else if (path_name.match(/\/products\/[0-9]+/) && req.method === 'GET') {
    const id = path_name.split('/')[2];
    getProduct(req, res, id);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not found' }));
  }
});

// check if port is occupied or use it instead
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
