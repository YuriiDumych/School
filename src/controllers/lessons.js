const DB = require('../db/db')
const db = new DB()

class Lesson{
  async create({topic, teacher, group, room, number}){
    const less = await db.findLesson(topic, group, number)
    if(less){
      return {status: 400, message: 'Lesson already exists'}
    } 
    const newLess = await db.createLesson({topic, teacher, group, room, number})
    if(newLess){
      return {status: 201, message: 'Lesson created'}
    }
  }
  async delete(id){
    const lesson = await db.findLessonById(id)
    if(!lesson){
      return {status: 400, message: 'Lesson does not exist'}
    }
    const deletedLess = await db.deleteLesson(id)
    if(deletedLess){
      return {status: 200, message: 'Saccessfully deleted'}
    }
  }

  async all(group){
    const lessons = await db.getLessons(group)
    if(lessons){
      return lessons
    }
  }

  async edit(id, obj){
    const lesson = await db.findLessonById(id)
    if(!lesson){
      return {status: 400, message: 'Lesson does not exist'}
    }
    const editedLesson = await db.editLesson(id, obj)
    if(editedLesson){
      return {status: 200, message: 'Saccessfully edited'}
    }
  }
}

module.exports = Lesson