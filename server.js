const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const app = express(); //Initialize app variable as express application
const bodyparser = require('body-parser');

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080  //if value of this PORT value from env file is not available, point to port 8080
//nodemon server.js

//log requests on console whenever we make a request
app.use(morgan('tiny'));

//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true}));

//set view engine


app.get('/', (req, res) => {
    res.send("Crud Application Initialized");
})

app.listen(PORT, () => {console.log(`Server is running on ${PORT}`)});