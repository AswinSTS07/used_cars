const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const db = require('./config/db')
const router = require('./routes/router')

const app = express()

const port = process.env.PORT || 5000
dotenv.config()
// Database connection
db.connect()

// Configurations
app.use(cors())

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes configurations
app.use('/api/v1',router)

app.get('/',(req,res)=>{
    res.send('Nodejs server is running....')
})

app.listen(port,()=>{
    console.log(`Server is running at the port ${port}`)
})