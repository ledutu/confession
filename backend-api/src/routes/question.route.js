var express = require('express');
const { route } = require('../../app');
const { QuestionController } = require('../controllers');
var router = express.Router();
var { Auth } = require('../middlewares');

router.use(Auth.auth);
router.get('/', QuestionController.index);
router.get('/:id', QuestionController.getDetail);

module.exports = router;
