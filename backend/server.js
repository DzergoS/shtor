const express = require('express');
const bodyParser = require('body-parser');
const db = require('../server/db'); 
const Product = require('../server/models/Product');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(express.json());


app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


process.on('SIGINT', () => {
  console.log('Closing server and MongoDB connection');
  server.close(() => {
    db.close(() => {
      console.log('Server and MongoDB connection closed');
      process.exit(0);
    });
  });
});