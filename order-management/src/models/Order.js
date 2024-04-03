// Order.js
// Order schema definition

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    // Define order schema fields
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
