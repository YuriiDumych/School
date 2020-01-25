const User = require('../models/user')
const Lesson = require('../models/lesson')
const Group  = require('../models/group')
const Teacher = require('../models/teacher')
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

  findTeacher(firstName, lastName, subject){
    return Teacher.findOne({firstName, lastName, subject})
  }

  createTeacher(firstName, lastName, subject){
    const teacher = new Teacher({firstName, lastName, subject})
    return teacher.save()
  }

  saveUser(firstName, lastName, email, password){
    const user = new User()
    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    user.password = password
    return user.save()
  }

  findUser(email){
    return User.findOne({'email': email})
  }
  findUserById(id){
    return User.findOne({"_id": id})
  }
  updateUser(userId, groupId){
    return User.updateOne({"_id": userId}, {$set: {'group': groupId}})
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

  findGroup(name){
    return Group.findOne({"name": name})
  }
  createGroup(name){
    const group = new Group()
    group.name = name
    return group.save()
  }
  addMemberToGroup(groupId, userId){
    return Group.updateOne({"_id": groupId}, {$addToSet: {students: userId}})
  }
}

module.exports = DB