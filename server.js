const express = require('express');
const dotenv = require('dotenv');
const app = express(); //Initialize app variable as express application
const bodyparser = require('body-parser');
const appRoutes = require('./server/routes/appRoutes');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080  //if value of this PORT value from env file is not available, point to port 8080
//nodemon server.js

mongoose.connect('mongodb://localhost/meanDb');

//ROOT
app.get('/', (req, res) => {
    res.send("Crud Application Initialized");
})

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
//Call on routing from appRoutes file
app.use('/', appRoutes);

app.listen(PORT, () => {console.log(`Server is running on ${PORT}`)});

//mongod (mongod --dbpath ~/documents/data/db)