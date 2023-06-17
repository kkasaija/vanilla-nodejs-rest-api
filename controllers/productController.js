const {
  findAll,
  findById,
  addProduct,
  editProduct,
  removeProduct,
} = require('../models/productModel');

// Get all products from data file
const getProducts = async (req, res) => {
  try {
    const products = await findAll();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
};

//Get a product from data file
const getProduct = async (req, res, id) => {
  try {
    const product = await findById(id);
    if (!product) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Product not found' }));
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
  }
};

//Add a product to file
const createProduct = async (req, res) => {
  try {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', async () => {
      const { title, description, price } = JSON.parse(body);
      const product = {
        title,
        description,
        price,
      };
      const newProduct = await addProduct(product);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newProduct));
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res, id) => {
  try {
    const product = await findById(id);

    // product not available??
    if (!product) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Product not found' }));
    }

    // product available?
    else {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });

      req.on('end', async () => {
        const { title, description, price } = JSON.parse(body);
        const product = {
          title: title || product.title,
          description: description || product.description,
          price: price || product.price,
        };
        const updatedProduct = await editProduct(parseInt(id), product);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(updatedProduct));
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res, id) => {
  try {
    const product = await findById(id);

    // product not available??
    if (!product) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Product not found' }));
    }

    // product available?
    else {
      await removeProduct(id);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: `Product ${id} has been removed` }));
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
