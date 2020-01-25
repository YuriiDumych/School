const DB = require('../db/db')
const db = new DB()

class GroupController{
  async createGroup(name){
    const group = await db.findGroup(name)
    if(group){
      return {status: 400, message: 'Group already exists'}
    } 
    const newgroup = await db.createGroup(name)
    if(newgroup){
      return {status: 201, message: 'Group created', group: newgroup}
    }
  }

  async addMember({name, id}){
    const group = await db.findGroup(name)
    if(!group){
      return {status: 400, message: 'Group does not exist'}
    }   
    const user = await db.findUserById(id)
    if(!user){
      return {status: 400, message: 'User does not exist'}
    } else if(user.group){
      return {status: 400, message: 'User already hase group'}
    }
    const res = await db.addMemberToGroup(group._id, id)
    const updatedUser = await db.updateUser(id, group._id)
    if(res && updatedUser){
      return {status: 200, message: 'User added to group'}
    }
  }
}

module.exports = GroupController