var express = require('express');
var bodyParser = require('body-parser');


var app = express();

var index = require('./routes/index');
var articles = require('./routes/articles');
var categorys = require('./routes/categorys');
var searchArticles = require('./routes/searchArticles');
var flickr = require('./routes/flickr');
// 加在 router 前面，切記!!
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


// Set routers
app.use('/', index);
app.use('/api/articles', articles);
app.use('/api/categorys', categorys);
app.use('/api/searchArticles', searchArticles);
app.use('/api/flickr', flickr);

module.exports = app;