// // Require all the dependencies(API's)from package.json so it can be used on the server.
// const express = require('express') //HTTP requests
// const app = express() //express function
// const mongoose = require('mongoose') //mongodb API
// const passport = require('passport') //authentication
// const session = require('express-session') // HTTP sessions  
// const MongoStore = require('connect-mongo')(session) // //HTTP sessions stored in the mongo db store
// const flash = require('express-flash') // HTTP requests pop up messages sent from the server.
// const logger = require('morgan') //enables login
// const connectDB = require('./config/database') // a variable where the database file in the config folder is stored
// const mainRoutes = require('./routes/main') // Required the main.js file to the server from the routes folder
// const quizRoutes = require('./routes/quiz')// Required the todo.js file to the server from the routes folder
// const cors = require("cors")

// // Use path to access directory for static site serving
// const path = require("path")

// // Required the globalenvironment variable from the config folder / .env that contains our Secrets. so the server can find it
// require('dotenv').config({path: './config/.env'})

// //Required Passport.js from the config folder so it can be linked to the passport function in the passport.js file
// require('./config/passport')(passport)

// // This is a function called from database.js in the config file so moongoose can connect to the server
// connectDB()

// // 
// // app.set('view engine', 'ejs') // sets the template engine in the views folder to the HTML framework used and in this case its the express javascript HTML template
// // app.use(express.static('public')) // Middleware for serving static files to your express app.

// app.use(express.static(path.resolve(__dirname, "../client/dist")))


// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
// app.use(logger('dev'))
// // Sessions
// app.use(
//     session({
//       secret: 'keyboard cat',
//       resave: false,
//       saveUninitialized: false,
//       store: new MongoStore({ mongooseConnection: mongoose.connection }),
//     })
//   )
  
// // Passport middleware
// app.use(passport.initialize())
// app.use(passport.session())

// app.use(flash())
  
// // HTTP paths
// app.use('/', mainRoutes)
// app.use('/quiz', quizRoutes)
 
// // HTTP server listener.
// app.listen(process.env.PORT, ()=>{
//     console.log('Server is running, you better catch it!')
// })    

const express = require("express")
const app = express()
const mongoose = require("mongoose")
const passport = require("passport")
const session = require("express-session")
const MongoStore = require("connect-mongo")
const flash = require("express-flash")
const logger = require("morgan")
const connectDB = require("./config/database")
const mainRoutes = require("./routes/main")
// const quizRoutes = require('./routes/quiz')

const cors = require("cors")

// Use path to access directory for static site serving
const path = require("path")

// Use .env file in config folder
require("dotenv").config({ path: "./config/.env" })

// Passport config
require("./config/passport")(passport)

// Using EJS for views
// app.set("view engine", "ejs")
// app.set("views", path.join(__dirname, "views"))

// Static Folder
// app.use(express.static("public"))

// Static Folder for React App
app.use(express.static(path.resolve(__dirname, "../client/dist")))

// Body Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())


// Logging
app.use(logger("dev"))

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING })
  })
)
// use cors
app.use(cors())

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

// Views in public folder
// app.use(express.static("/public"))

// // Router directories
app.use("/", mainRoutes)

//serves react components
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"))
})

// Connect To Database
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!")
  })
})
