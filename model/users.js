const bcrypt = require('bcrypt');
const saltRounds = 10;
const KEY = '123456';

var salt = bcrypt.genSaltSync(saltRounds);
var hash = bcrypt.hashSync(KEY, salt);
module.exports = hash;