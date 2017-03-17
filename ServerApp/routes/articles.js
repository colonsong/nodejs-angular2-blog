'use strict';

var express = require('express');
var router = express.Router();
var db = require('../db/mysql');


router.get('/:page', function(req, res) {
    db.getArticles(req.params.page, function(err, data){
        res.status(200).json( {success: data} );
    });
});

router.get('/id/:article_id', function(req, res) {
    db.getArticleById(req.params.article_id, function(err, data){
        res.status(200).json( {success: data} );
    });

});

router.post('/', function(req, res) {
    var data = req.body;
    res.status(200).json( 
        {
            success: data,
        } );

});

module.exports = router;

