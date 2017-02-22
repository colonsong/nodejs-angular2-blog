'use strict';

var express = require('express');
var router = express.Router();
var db = require('../db/mysql');


router.get('/', function(req, res) {
    var resJSON = {};
    db.getArticles(function(err, data){
        res.status(200).json( {success: data} );
    });
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

