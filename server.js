// Require all the dependencies(API's)from package.json so it can be used on the server.
const express = require('express') //HTTP requests
const app = express() //express function
const mongoose = require('mongoose') //mongodb API
const passport = require('passport') //authentication
const session = require('express-session') // HTTP sessions  
const MongoStore = require('connect-mongo')(session) // //HTTP sessions stored in the mongo db store
const flash = require('express-flash') // HTTP requests pop up messages sent from the server.
const logger = require('morgan') //enables login
const connectDB = require('./config/database') // a variable where the database file in the config folder is stored
const mainRoutes = require('./routes/main') // Required the main.js file to the server from the routes folder
const quizRoutes = require('./routes/quiz')// Required the todo.js file to the server from the routes folder

// Required the globalenvironment variable from the config folder / .env that contains our Secrets. so the server can find it
require('dotenv').config({path: './config/.env'})

//Required Passport.js from the config folder so it can be linked to the passport function in the passport.js file
require('./config/passport')(passport)

// This is a function called from database.js in the config file so moongoose can connect to the server
connectDB()

// 
app.set('view engine', 'ejs') // sets the template engine in the views folder to the HTML framework used and in this case its the express javascript HTML template
app.use(express.static('public')) // Middleware for serving static files to your express app.
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  
// HTTP paths
app.use('/', mainRoutes)
app.use('/quiz', quizRoutes)
 
// HTTP server listener.
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    