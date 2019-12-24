var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');
const saltRounds = 10;

var hash =  require('../model/users');

/* GET login page. */
router.get('/', function(req, res, next) {
	res.render('login');
});

/* POST login page. */
router.post('/', function(req, res, next) {
	console.log('req.body.key', req.body.key);
	const check = bcrypt.compareSync(req.body.key, hash); 
	console.log('check', check);
});

module.exports = router;
