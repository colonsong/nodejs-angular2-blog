'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.status(200).json( {success: "GET Articles"} );

});

module.exports = router;

