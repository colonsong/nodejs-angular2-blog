var express = require('express');
var app = express();

var index = require('./routes/index');
var articles = require('./routes/articles');

// Set routers
app.use('/', index);
app.use('/api/articles', articles);

module.exports = app;