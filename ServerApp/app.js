var express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config();

// DataBase 
var mysql = require("mysql");

var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_BLOG
});

con.connect(function(err) {
    if (err) {
        console.log('connecting error');
        return;
    }
    console.log('connecting success');
});

con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
  if(err) console.log('err: ', err);
  else console.log('Terminated done: ');
});

var app = express();

var index = require('./routes/index');
var articles = require('./routes/articles');

// 加在 router 前面，切記!!
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

// db state
app.use(function(req, res, next) {
    req.con = con;
    next();
});

// Set routers
app.use('/', index);
app.use('/api/articles', articles);

module.exports = app;