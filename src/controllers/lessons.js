const DB = require('../db/db')
const db = new DB()

class Lesson{
  async create({topic, teacherId, groupId, room, number}){
    const less = await db.findLesson(topic, groupId, number)
    if(less){
      return {status: 400, message: 'Lesson already exists'}
    } 
    const newLess = await db.createLesson({topic, teacherId, groupId, room, number})
    if(newLess){
      return {status: 201, message: 'Lesson created', lesson: newLess}
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

  async all(groupId){
    const lessons = await db.getLessons(groupId)
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
      return {status: 200, message: 'Saccessfully edited', lesson: editedLesson}
    }
  }
}

module.exports = Lesson