var express = require('express');
var router = express.Router();
var auth = require('./auth.route');
var user = require('./user.route');

router.use('/auth', auth);
router.use('/user', user);

module.exports = router;
