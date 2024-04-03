const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./controllers/UserController');

const app = express();
const port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost:27017/Bangalore_city', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on("error", () => {
    console.log("Error in connection");
});

db.once('open', () => {
    console.log("Connected");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', userRoutes);

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
    res.send('Welcome to the User Management Microservice');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
