const mongoose = require('mongoose');
const { db_uri } = require('../config/config');

mongoose.Promise = global.Promise;
mongoose.connect(db_uri);
const connection = mongoose.connection;

connection
    .once('open', res => console.log('Successfully connected to MongoDB'))
    .on('error', err => console.log('Error connecting to MongoDB'));