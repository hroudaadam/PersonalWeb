const express = require('express');
const errorHandler = require('./helpers/errorHandler');
require('dotenv').config();

var mainController = require('./controllers/mainController');
var postController = require('./controllers/postController');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', mainController);
app.use('/api/posts', postController);

// global error handler
app.use(errorHandler);

module.exports = app;
