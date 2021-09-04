var express = require('express');
var router = express.Router();
var auth = require('./auth.route');
var question = require('./question.route');
var user = require('./user.route');

router.use('/auth', auth);
router.use('/user', user);
router.use('/question', question);

module.exports = router;
