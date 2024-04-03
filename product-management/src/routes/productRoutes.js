// productRoutes.js
// Routes for product-related endpoints

const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

// Define product routes
router.post('/products', ProductController.createProduct);
router.get('/products/:id', ProductController.getProductById);

// Other product routes...

module.exports = router;
