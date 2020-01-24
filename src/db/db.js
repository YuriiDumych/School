const User = require('../models/user')
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

}

module.exports = DB