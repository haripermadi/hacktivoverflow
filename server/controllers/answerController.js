const Answer = require('../models/answer')

module.exports = {
  getAnswer: (req, res) => {
    console.log('masuk get answer')
    Answer.find()
    .populate('userId')
    .populate('questionId')
    .exec()
    .then(dataQuestion=>{
      res.status(200).json({
        message:' success get list answer',
        dataQuestion
      })
    }).catch(err=>{
      res.status(400).json({
        message: 'failed get answer'
      })
    })
  },
  addAnswer: (req, res) =>{
    let input = {
      content: req.body.content,
      userId: req.headers.userid,
      questionId: req.body.questionId
    }
    let newanswer = new Answer(input)
    newanswer.save().then(data=>{
      res.status(200).json({
        message: 'success add answer',
        data
      })
    }).catch(err=>{
      res.status(400).json({
        message: 'failed!'
      })
    })
  },
  deleteAnswer: (req, res) =>{
    let id = {
      _id:req.params.id
    }
    Answer.findByIdAndRemove(id,(err,data)=>{
      if(err){
        res.status(400).json({
          message:'failed remove'
        })
      }else{
        res.status(200).json({
          message:'success remove'
        })
      }
    })
  }
}