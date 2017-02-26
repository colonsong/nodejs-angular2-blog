require('dotenv').config();

// DataBase 
var mysql = require("mysql");

var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_BLOG,
    debug: true,
});


// Get records from a city
exports.getArticles = function(callback) {
    var sql = "SELECT title,blogContents_id id, classify, datetime, contents FROM `blogContents` order by `blogContents_id` desc limit 5 ";
    
    con.query(sql, function(err, rows, fields){
        if(err) { throw err;}
        
        console.log('Data received from Db:\n');
        console.log(rows);
        callback(err, rows);
    });
};

// Get records from a city
exports.getArticleById = function(id, callback) {
    var sql = "SELECT title,blogContents_id id, classify, datetime, contents FROM `blogContents` where blogContents_id = ? ";
    
    con.query(sql, [id], function(err, rows, fields){
        if(err) { throw err;}
        
        console.log('Data received from Db:\n');
        console.log(rows);
        callback(err, rows);
    });
};


// Get records from a city
exports.searchArticles = function(term, callback) {
    var sql = "SELECT title,blogContents_id id, classify, datetime, contents FROM `blogContents` where title like ? OR contents like ? limit 20";
    con.query(sql, ['%' + term + '%','%' + term + '%'], function(err, rows, fields){
        if(err) { throw err;}
        console.log('Data received from Db:\n');
        console.log(rows);
        callback(err, rows);
    });
};