const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  en_name: String,
  ua_name: String,
  group: String,
  en_description: String,
  ua_description: String,
  en_price: Number,
  ua_price: Number,
  img: {
        data: Buffer,
        contentType: String,
        filename: String
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;