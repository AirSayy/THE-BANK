const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
  question: {
    type: String,
    unique: true 
    },
  answer: { 
    type: String, 
    unique: true 
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
  
})

module.exports = mongoose.model('Quiz', QuizSchema)