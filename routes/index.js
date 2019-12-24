var express = require('express');
var router = express.Router();

var images = require('../model/image.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('Inside the homepage callback function')
    console.log('ssssss', req.sessionID)
	console.log('images', images);
	res.render('index', { images: images });
});

module.exports = router;
