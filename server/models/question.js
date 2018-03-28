const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title: String,
  description: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  votes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  answerList: [{
    type: Schema.Types.ObjectId,
    ref: 'Answer'
  }]
},
{
  timestamp: true
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question