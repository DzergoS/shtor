const { Schema, model } = require('mongoose')

const imageSchema = new Schema({
  key: String,
  mimeType: String,
  bucket: String,
  // filename: String,
  // filePath: String,
  // filesToDelete: String
});


const productColorSchema = new Schema({
  en_name: { type: String, required: true },
  ua_name: { type: String, required: true },
})
const ProductColor = model('ProductColor', productColorSchema);


const baseProductSchema = new Schema({
  en_name: { type: String, default: 'Product name' },
  ua_name: { type: String, default: 'Назва товару' },
  group: { type: String, default: 'Група' },
  en_description: { type: String, default: 'Product description' },
  ua_description: { type: String, default: 'Опис товару' },
  en_price: { type: Number, min: 0, default: 1  },
  ua_price: { type: Number, min: 0, default: 1  },
  images: imageSchema
});
const BaseProduct = model('BaseProduct', baseProductSchema);


const attachmentProductSchema = new Schema({
  en_name: { type: String, required: true },
  ua_name: { type: String, required: true },
  en_price: { type: Number, required: true, min: 0 },
  ua_price: { type: Number, required: true, min: 0 },
})
const AttachmentProduct = model('AttachmentProduct', attachmentProductSchema);

// const normalProductSchema = new Schema({
//   attachment: { type: Schema.Types.ObjectId, ref: 'AttachmentProduct', default: null }
// });
// const NormalProduct = BaseProduct.discriminator('NormalProduct', normalProductSchema);


const braceletProductSchema = new Schema({
  size: { type: String, required: true },
  color: { type: String, required: true },
});
const BraceletProduct = BaseProduct.discriminator('Bracelet', braceletProductSchema);


const shellProductSchema = new Schema({
  size: { type: String, required: true },
});
const ShellProduct = BaseProduct.discriminator('Shell', shellProductSchema);


module.exports = {
  ProductColor,
  BaseProduct,
  AttachmentProduct,
  BraceletProduct,
  ShellProduct,
};
