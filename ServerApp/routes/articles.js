'use strict';

var express = require('express');
var router = express.Router();
var db = require('../db/mysql');


router.get('/', function(req, res) {

    db.getArticles(function (err, con) {
        if(err) { /* handle your error here */ }
        var articles = 'select * from blogContents limit 10';
        console.log("con: " + con); //displays undefined
        con.query(userQuery, function(err, articles){
            console.log(articles);
        con.release();
        });
    });
    

    res.status(200).json( {success: "GET Articles"} );

});

router.get('/id/:article_id', function(req, res) {
    res.status(200).json( 
        {
            success: 'get !',
            article_id : req.params.article_id
        } );

});

router.post('/', function(req, res) {
    var data = req.body;
    res.status(200).json( 
        {
            success: data,
        } );

});

module.exports = router;

