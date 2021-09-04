var express = require('express');
var router = express.Router();

const SeedController = require('./seed.controller');

// User -> BookCategory -> Book -> Blog -> Book Comment -> Blog Comment
router.get('/user', SeedController.createUser);
router.get('/root-question', SeedController.createRootQuestion);

module.exports = router;