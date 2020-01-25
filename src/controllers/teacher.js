const DB = require('../db/db')
const db = new DB()

class TeacherController{
  async createTeacher({firstName, lastName, subject}){
    const res = await db.findTeacher(firstName, lastName, subject)
    if(res){
      return {status: 400, message: 'Teacher already exists'}
    }
    const teacher = await db.createTeacher(firstName, lastName, subject)
    if(teacher){
      return {status: 201, message: 'Teacher created', teacher}
    }
  }
  async allTeachers(){
    const teachers = await db.allTeachers()
    if(!teachers.length){
      return {status: 400, message: 'There are no theachers'}
    } 
    return {status: 200, message: '', teachers}
  }
}

module.exports = TeacherController