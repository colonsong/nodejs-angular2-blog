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
    var sql = "SELECT * FROM `blogContents` order by `blogContents_id` desc limit 5 ";
    
    con.query(sql, function(err, rows, fields){
        if(err) { throw err;}
        
        console.log('Data received from Db:\n');
        console.log(rows);
        callback(err, rows);
    });
};
