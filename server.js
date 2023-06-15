//This is the entry point of the application
const http = require("http");
const fs = require("fs");
const url = require("url");

const products = require("./data/products");

//create server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/products" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Notfound" }));
  }
});

// check if port is occupied or use it instead
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
