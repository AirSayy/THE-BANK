
const express = require('express')
const router = express.Router()
const quizController = require("../controllers/quiz");
const { ensureAuth, ensureGuest } = require('../middleware/auth')



router.get('/', ensureAuth, quizController.getQuiz)

module.exports = router