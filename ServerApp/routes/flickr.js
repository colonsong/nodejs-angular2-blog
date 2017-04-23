'use strict';

var express = require('express');
var router = express.Router();
var db = require('../db/mysql');
require('dotenv').config();
var request = require('request');
var crypto = require('crypto');



router.get('/testLogin', function(req, res) {
        /**
     * https://api.flickr.com/services/rest
?nojsoncallback=1 &oauth_nonce=84354935
&format=json
&oauth_consumer_key=653e7a6ecc1d528c516cc8f92cf98611
&oauth_timestamp=1305583871
&oauth_signature_method=HMAC-SHA1
&oauth_version=1.0
&oauth_token=72157626318069415-087bfc7b5816092c
&oauth_signature=dh3pEH0Xk1qILr82HyhOsxRv1XA%3D
&method=flickr.test.login
     */
    let url = 'https://api.flickr.com/services/rest';

    let params = [];
    params['format'] = 'json';
    params['nojsoncallback'] = 1;
    params['oauth_nonce'] = Math.floor((Math.random() * 100000) + 1);
    params['oauth_consumer_key'] =  process.env.FLICKR_API_KEY;
    params['oauth_timestamp'] = (+new Date);
    params['oauth_signature_method'] = 'HMAC-SHA1';
    params['oauth_version'] = '1.0'
    params['oauth_token'] = process.env.FLICKR_OAUTH_TOKEN;
   
    params['method'] = 'flickr.test.login';

/**
 * GET&https://api.flickr.com/services/rest&method=flickr.test.login&nojsoncallback=1&oauth_cons
umer_key=80dc07f1395ced001fc75990c520eb70&oauth_nonce=45255&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1492921450539&oauth_token=721576
79844059882-2986055bc276aee8&oauth_version=1.0
 */
    let appSecret = encodeURIComponent(process.env.FLICKR_API_SECRET) + '&' +encodeURIComponent(process.env.FLICKR_OAUTH_TOKEN_SECRET);
    let signBaseURL = "GET&" + encodeURIComponent(url) +'&' + encodeURIComponent(joinParameters(params));
    

    let signature = crypto.createHmac('sha1', appSecret).update(signBaseURL).digest().toString('base64');
  
    params['oauth_signature'] = signature;
   
  console.log('signBaseURL:' + signBaseURL);

    request( url + '?' + joinParameters(params), function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        res.status(200).json( {success: '@@=='} );
    });
     
    
});

function joinParameters(params = []){
    var keys = Object.keys(params);
    keys = keys.sort();
   
    var outputArray = [];
    for( var key in keys) {
        outputArray.push(encodeURI(keys[key]) + '=' + encodeURI(params[keys[key]]));
    }
    console.log(outputArray);
    return outputArray.join('&');


}


router.post('/', function(req, res) {
    var data = req.body;
    res.status(200).json( 
        {
            success: data,
        } );

});
module.exports = router;

