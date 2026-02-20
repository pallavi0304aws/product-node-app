const express = require('express');
const app = express();
app.use(express.json());

let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 }
];

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Get single product
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  res.json(product);
});

// Add product
app.post('/products', (req, res) => {
  products.push(req.body);
  res.json({ message: "Product added successfully" });
});

// Delete product
app.delete('/products/:id', (req, res) => {
  products = products.filter(p => p.id != req.params.id);
  res.json({ message: "Product deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
