
//const Quiz = require("../models/Quiz");

module.exports = {
    getQuiz: (req, res) => {
      res.render("quiz.ejs");
    }
  }

  // module.exports = { getQuiz :(req, res) => {
  //   if (req.user) {
        
  //      res.render("quiz.ejs");
  //   }
  //   res.redirect( {
  //     title: "dashboard",
  //   },"dashboard");
  // }}