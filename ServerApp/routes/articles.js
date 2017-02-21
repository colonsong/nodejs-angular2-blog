'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var data = req.body;
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
            article_id : req.params.article_id
        } );

});

module.exports = router;

