const express = require('express')
const cors = require("cors");
const bodyParser = require('body-parser');
const dbConnection = require('./src/config/db')
require('dotenv').config()

const app = express()
//db connection
dbConnection()

app.use("/api/posts", require("./src/routers/post.router"))

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server up and running on port ${PORT}`)
})