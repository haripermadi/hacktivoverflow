const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  content: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  questionId: {
    type: Schema.Types.ObjectId,
    ref: 'Question'
  },
  votes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
},
{
  timestamp: true
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer