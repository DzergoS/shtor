const mongoose = require('mongoose');

const baseProductSchema = new mongoose.Schema({
  en_name: String,
  ua_name: String,
  group: String,
  en_description: String,
  ua_description: String,
  en_price: Number,
  ua_price: Number,
  img: {
    // data: Buffer,
    contentType: String,
    filename: String,
  },
});
const BaseProduct = mongoose.model('BaseProduct', baseProductSchema);

const normalProductSchema = new mongoose.Schema({
  photos: [String],
  priceRiseWithChain: Boolean,
});
const NormalProduct = BaseProduct.discriminator('NormalProduct', normalProductSchema);


const braceletSchema = new mongoose.Schema({
  sizes: [String], 
  colorChoices: [String], 
  priceStable: Boolean,
});
const Bracelet = BaseProduct.discriminator('Bracelet', braceletSchema);

const shellSchema = new mongoose.Schema({
  sizes: [String],
  priceDependsOnSize: Boolean,
});

const Shell = BaseProduct.discriminator('Shell', shellSchema);

module.exports = {
  BaseProduct,
  NormalProduct,
  Bracelet,
  Shell,
};