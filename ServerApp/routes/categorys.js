'use strict';

var express = require('express');
var router = express.Router();
var db = require('../db/mysql');



router.get('/', function(req, res) {
    db.getCategorys(req.params.term, function(err, data){
        res.status(200).json( {success: data} );
    });

});

module.exports = router;

