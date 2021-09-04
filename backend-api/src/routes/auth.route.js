var express = require('express');
const { route } = require('../../app');
var router = express.Router();
const { AuthController } = require('../controllers');

/* GET users listing. */
router.post('/login', AuthController.login);
router.post('/sign-up', AuthController.postSignUp);

module.exports = router;
