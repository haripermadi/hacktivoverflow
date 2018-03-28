const Question = require('../models/question')
const User = require('../models/user')
const jwt = require('jsonwebtoken');

module.exports = {
  getQuestion: (req, res) => {
    Question.find()
    .populate('answerList')
    .populate('userId')
    .exec()
    .then(data=>{
      res.status(200).json({
        message:' success get list question',
        data
      })
    }).catch(err=>{
      res.status(400).json({
        message: 'failed get questions'
      })
    })
  },
  addQuestion: (req, res) => {
    console.log("req headers==",req.headers)
    // let decoded = jwt.verify(req.headers.token, 'secret')
    let input = {
      title: req.body.title,
      description: req.body.description,
      userId: req.headers.userid
    }
    let question = new Question (input)
    question.save().then(data=>{
      res.status(200).json({
        message:' success adding new question',
        data
      })
    }).catch(err=>{
      res.status(400).json({
        message: 'failed!'
      })
    })
  },
  updateQuestion: (req, res) => {
    let id = {_id: req.params.id}
    let input = {
      title: req.body.title,
      description: req.body.description
    }
    Question.findByIdAndUpdate(id, input, (err) =>{
      if(err){
        res.status(400).json({
          message:"error",
          err
        })
      }else{
        res.status(200).json({
          message:"update success",
        })
      }
    })
  },
  deleteQuestion: (req, res) => {
    let id = {
      _id:req.params.id
    }
    Question.findByIdAndRemove(id,(err,data)=>{
      if(err){
        res.status(400).json({
          message:'failed remove question'
        })
      }else{
        res.status(200).json({
          message:'success remove a question'
        })
      }
    })
  }
}

