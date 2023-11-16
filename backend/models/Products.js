const { Schema, model } = require('mongoose')

const imageSchema = new Schema({
  filename: { type: String, required: true },
  mimeType: { type: String, required: true },
});


const baseProductSchema = new Schema({
  en_name: { type: String, required: true },
  ua_name: { type: String, required: true },
  group: { type: String, required: true },
  en_description: { type: String, required: true },
  ua_description: { type: String, required: true },
  en_price: { type: Number, required: true, min: 0 },
  ua_price: { type: Number, required: true, min: 0 },
  images: [imageSchema],
});
const BaseProduct = model('BaseProduct', baseProductSchema);


const attachmentProductSchema = new Schema({
  en_name: { type: String, required: true },
  ua_name: { type: String, required: true },
  en_price: { type: Number, required: true, min: 0 },
  ua_price: { type: Number, required: true, min: 0 },
})
const AttachmentProduct = model('AttachmentProduct', attachmentProductSchema);

const normalProductSchema = new Schema({
  attachment: { type: Schema.Types.ObjectId, ref: 'AttachmentProduct', default: null }
});
const NormalProduct = BaseProduct.discriminator('NormalProduct', normalProductSchema);


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
  NormalProduct,
  AttachmentProduct,
  BraceletProduct,
  ShellProduct,
};
