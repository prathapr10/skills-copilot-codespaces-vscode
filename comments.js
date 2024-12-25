// Create web server
// 1. Load express
const express = require('express');
// 2. Create an instance of express
const app = express();
// 3. Load the comments data
const comments = require('./data/comments');
const products = require('./data/products');
// 4. Define the route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});
// 5. Define the route to get comments by id
app.get('/comments/:id', (req, res) => {
  const foundComment = comments.some(comment => comment._id === parseInt(req.params.id));
  if (foundComment) {
    res.json(comments.filter(comment => comment._id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No comment with the id of ${req.params.id}` });
  }
});
// 6. Define the route to get all products
app.get('/products', (req, res) => {
  res.json(products);
});
// 7. Define the route to get products by id
app.get('/products/:id', (req, res) => {
  const foundProduct = products.some(product => product._id === parseInt(req.params.id));
  if (foundProduct) {
    res.json(products.filter(product => product._id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No product with the id of ${req.params.id}` });
  }
});
// 8. Start the server
app.listen(4001, () => {
  console.log('Server started on http://localhost:4001');
});