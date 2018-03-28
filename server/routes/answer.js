var express = require('express');
var router = express.Router();
const {getAnswer, addAnswer, deleteAnswer} = require('../controllers/answerController')
/* GET users listing. */

router.get('/', getAnswer)
router.post('/', addAnswer)
router.delete('/:id', deleteAnswer)

module.exports = router;
