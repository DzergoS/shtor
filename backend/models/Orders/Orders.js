const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
  currency: { type: String, enum: ['UAH', 'USD'], required: true},
  amount: { type: Number, min: 0, required: true },
  orderDescription: { type: String, required: true },
  language: { type: String, enum: ['en', 'uk'], required: true},
  email: { type: String, required: true },
  products: [{
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true, min: 1 }
  }],
  shippingInfo: {
    type: { type: String, enum: ['Ukraine', 'International'], required: true },
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    price: { type: Number, required: true },
    state: { type: String },
    country: { type: String },
    postalCode: { type: String },
  },
  createdAt: { type: Date, default: Date.now }
});

const Order = model('Order', orderSchema);

module.exports = Order
