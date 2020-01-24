const express = require('express')
const app = express()
const DB = require('./db/db')
const conf = require('dotenv').config({path: './config/.env'}).parsed
const db = new DB(conf)


app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/lesson', require('./routes/lessons'))

db.connect(conf.MONGO)
const PORT = conf.PORT || 3000
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))