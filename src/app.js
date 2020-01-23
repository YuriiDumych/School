const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config({path: './config/.env'})

app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routes/auth'))

mongoose.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  .then(() => console.log('Database is connected'))
  .catch(err => console.log('Cannot connect to database \n' + err))
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))