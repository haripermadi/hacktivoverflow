var express = require('express');
var router = express.Router();
const {getQuestion, addQuestion, updateQuestion, deleteQuestion} = require('../controllers/questionController')
/* GET users listing. */

router.get('/', getQuestion)
router.post('/', addQuestion)
router.put('/:id', updateQuestion)
router.delete('/:id', deleteQuestion)

module.exports = router;
