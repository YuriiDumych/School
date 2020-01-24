const DB = require('../db/db')

const path = require('path')
const conf = require('dotenv').config({ path: path.resolve(__dirname, '../config/.env') }).parsed
const db = new DB()

class Lesson{
  async create({topic, teacher, group, room, number}){
    const less = await db.findLesson({topic, group, number})
    if(less){
      return {status: 400, message: 'Lesson already exists'}
    } 
    const newLess = await db.createLesson({topic, teacher, group, room, number})
    if(newLess){
      return {status: 201, message: 'Lesson created'}
    }
  }
}

module.exports = Lesson