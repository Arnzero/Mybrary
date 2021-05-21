if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config() //.load? .config() .parse() <- didn't work
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
//const bodyParser = require('body-parser')         //bodyParser deprecated
//const multer = require('multer') // duplicate?
const methodOverride = require('method-override')

const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')
const bookRouter = require('./routes/books')


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout') //header and footers ?
app.use(expressLayouts)
app.use(methodOverride('_method')) //_method is special parameter for PUT, DELETE
app.use(express.static('public'))
//app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
//app.use([express.json(), express.urlencoded({ extended: true })])
app.use(express.urlencoded({limit: '10mb', extended: true}))
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log("Connected to Mongoose"))


app.use('/', indexRouter)
app.use('/authors', authorRouter) // /authors/ and /authors/new
app.use('/books', bookRouter)



/*
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

*/

// http://localhost:3000
app.listen(process.env.PORT || 3000)