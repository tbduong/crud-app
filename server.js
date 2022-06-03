const express = require('express');
const dotenv = require('dotenv');

const app = express(); //Initialize app variable as express application

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080  //if value of this PORT value from env file is not available, point to port 8080
//nodemon server.js

app.get('/', (req, res) => {
    res.send("Crud Application Initialized");
})

app.listen(PORT, () => {console.log(`Server is running on ${PORT}`)});