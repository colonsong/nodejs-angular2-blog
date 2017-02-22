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



// Get records from a city
exports.getArticles = function(articles, rows) {
    var sql = "SELECT * FROM `blogContents` order by `blogContents_id` desc limit 1 ";
    con.query(sql, function(err, rows){
        if(err) throw err;

        console.log('Data received from Db:\n');
        console.log(rows);
    });
};
