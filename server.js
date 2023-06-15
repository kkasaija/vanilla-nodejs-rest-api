//This is the entry point of the application
const http = require("http");
const fs = require("fs");
const url = require("url");
const { getProducts } = require("./controllers/productController");

//create server
const server = http.createServer((req, res) => {
  if (req.url === "/products" && req.method === "GET") {
    getProducts(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not found" }));
  }
});

// check if port is occupied or use it instead
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
