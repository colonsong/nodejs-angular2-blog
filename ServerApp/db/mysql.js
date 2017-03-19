require('dotenv').config();

// DataBase 
var mysql = require("mysql");
var db_option = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_BLOG,
    debug: true,
};
var con = mysql.createConnection(db_option);
con.on('error', function(err){

    console.log(err);
});
// Get records from a city
exports.getArticles = function(page, callback) {
    var perPage = 10;
    var start = (page-1) * perPage;
    const end = start + perPage;

    var sql = "SELECT title,blogContents_id id, classify, datetime, contents FROM `blogContents` " + 
    "where hide = 0 order by `blogContents_id` desc limit ?,?";

    con.query(sql,[start,end], function(err, rows, fields){
        if(err) throw err;
        console.log('Data received from Db:\n');
        console.log(rows);
        var sql = "SELECT count(*) c FROM `blogContents` where hide = 0  ";
        con.query(sql, function(err, count, fields){
            if(err) throw err;
            console.log(count);
            callback(err, {"count":count[0].c, "data":rows});
        });
        
    });

};

// Get records from a city
exports.getArticleById = function(id, callback) {
    
    var sql = "SELECT title,blogContents_id id, classify, datetime, contents FROM `blogContents` where blogContents_id = ? AND hide = 0 ";
    
    con.query(sql, [id], function(err, rows, fields){
        if(err) throw err;
        
        console.log('Data received from Db:\n');
        console.log(rows);
        callback(err, rows);
    });
};


// Get records from a city
exports.searchArticles = function(term, callback) {
   
    var sql = "SELECT title,blogContents_id id, classify, datetime, contents FROM `blogContents` where title like ? OR contents like ? limit 20";
    con.query(sql, ['%' + term + '%','%' + term + '%'], function(err, rows, fields){
        if(err) throw err;
        console.log('Data received from Db:\n');
        console.log(rows);
        callback(err, rows);
    });
};

exports.getCategorys = function(term, callback) {
    var sql = "SELECT `classify` , COUNT(  `classify` ) c FROM  `blogContents` where `hide` = 0 GROUP BY  `classify` ORDER BY  `c` DESC ";
    con.query(sql, function(err, rows, fields){
        if(err) throw err;
        
        console.log('Data received from Db:\n');
        console.log(rows);
        callback(err, rows);
    });
};

// 文章目錄
exports.getArticlesByClassify = function(classify, callback) {
    
    var sql = "SELECT *,blogContents_id id,DATE_FORMAT(update_time, '%W, %M, %d, %Y, %H:%i:%s') d " +  
    "FROM `blogContents` WHERE classify=? ORDER BY  `update_time` DESC limit 10";
    con.query(sql, [classify], function(err, rows, fields){
        if(err) throw err;
        console.log('Data received from Db:\n');
        console.log(rows);
        callback(err, rows);
    });
};



