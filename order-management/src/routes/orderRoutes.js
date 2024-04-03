// orderRoutes.js
// Routes for order-related endpoints

const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

// Define order routes
router.post('/orders', OrderController.createOrder);
router.get('/orders/:id', OrderController.getOrderById);

// Other order routes...

module.exports = router;
