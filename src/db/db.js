const User = require('../models/user')
const Lesson = require('../models/lesson')
const mongoose = require('mongoose')

class DB{
  async connect(uri){
    try{
      await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
      console.log('Database is connected')
    } catch (err){
      console.log('Cannot connect to database \n' + err)
    }
  }

  saveUser(email, password){
    const user = new User()
    user.email = email
    user.password = password
    return user.save()
  }

  findUser(email){
    return User.findOne({'email': email})
  }

  createLesson({topic, teacher, group, room, number}){
    const lesson = new Lesson()
    lesson.topic = topic
    lesson.teacher = teacher
    lesson.group = group
    lesson.room = room
    lesson.ordinalNumber = number
    return lesson.save()
  }
  findLesson(topic, group, ordinalNumber){
    return Lesson.findOne({'topic': topic, 'group': group, "ordinalNumber": ordinalNumber})
  }

  findLessonById(id){
    return Lesson.findOne({"_id": id})
  }

  getLessons(group){
    return Lesson.find({"group": group})
  }

  deleteLesson(id){
    return Lesson.findOneAndDelete({"_id": id})
  }

  editLesson(id, obj){
    return Lesson.findOneAndUpdate({"_id": id}, obj)
  }
}

module.exports = DB