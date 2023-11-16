const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  mimeType: { type: String, required: true },
});


const baseProductSchema = new mongoose.Schema({
  en_name: { type: String, required: true },
  ua_name: { type: String, required: true },
  group: { type: String, required: true },
  en_description: { type: String, required: true },
  ua_description: { type: String, required: true },
  en_price: { type: Number, required: true, min: 0 },
  ua_price: { type: Number, required: true, min: 0 },
  images: [imageSchema],
});
const BaseProduct = mongoose.model('BaseProduct', baseProductSchema);


const attachmentProductSchema = new mongoose.Schema({
  en_name: { type: String, required: true },
  ua_name: { type: String, required: true },
  en_price: { type: Number, required: true, min: 0 },
  ua_price: { type: Number, required: true, min: 0 },
})
const AttachmentProduct = mongoose.model('AttachmentProduct', attachmentProductSchema);

const normalProductSchema = new mongoose.Schema({
  attachment: { type: mongoose.Schema.Types.ObjectId, ref: 'AttachmentProduct', default: null }
});
const NormalProduct = BaseProduct.discriminator('NormalProduct', normalProductSchema);


const braceletProductSchema = new mongoose.Schema({
  size: { type: String, required: true },
  color: { type: String, required: true },
});
const BraceletProduct = BaseProduct.discriminator('Bracelet', braceletProductSchema);


const shellProductSchema = new mongoose.Schema({
  size: { type: String, required: true },
});
const ShellProduct = BaseProduct.discriminator('Shell', shellProductSchema);


module.exports = {
  NormalProduct,
  AttachmentProduct,
  BraceletProduct,
  ShellProduct,
};
