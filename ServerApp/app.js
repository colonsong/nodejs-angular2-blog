var express = require('express');
var bodyParser = require('body-parser');


var app = express();

var index = require('./routes/index');
var articles = require('./routes/articles');

// 加在 router 前面，切記!!
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );



// Set routers
app.use('/', index);
app.use('/api/articles', articles);

module.exports = app;