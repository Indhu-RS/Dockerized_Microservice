const express = require('express');
const Router = express.Router();
const homeSchema = require('../models/homeSchema');

// User registration
Router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userData = new homeSchema({
            name,
            email,
            password 
        });
        await userData.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to register user' });
    }
});

// User login
Router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await homeSchema.findOne({ email: email });

        if (user && user.password === password) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Farmer registration
Router.post('/f_register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userData = new farmerschema({
            name,
            email,
            password
        });
        await userData.save();
        res.status(201).json({ message: 'Farmer registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to register farmer' });
    }
});

// Farmer login
Router.post('/f_login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const farmer = await farmerschema.findOne({ email: email });

        if (farmer && farmer.password === password) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = Router;
