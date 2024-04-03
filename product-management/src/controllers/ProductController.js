const express = require('express');
const Router = express.Router();
const Item = require('../models/Product');

Router.get('/dashboard', async (req, res) => {
    try {
        // Fetch items from the MongoDB collection
        const items = await Item.find();

        // Render the dashboard.ejs template with the items data
        res.render('dashboard', { title: 'Dashboard', items });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
module.exports=Router;