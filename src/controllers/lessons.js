const DB = require('../db/db')

const LessonModel = require('../models/lesson')
const path = require('path')
const conf = require('dotenv').config({ path: path.resolve(__dirname, '../config/.env') }).parsed
const db = new DB()

class Lesson{

}

module.exports = Lesson