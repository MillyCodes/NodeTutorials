//app.js
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product'); //imports route for products
//initialize my express app
const app = express();
//set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://milly:<password>@ds121603.mlab.com:21603/productstutorial';

const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

//set up a port to use for app
let port = 3000

//telling my app to listen to this port
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});