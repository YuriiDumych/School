const User = require('../models/user')

class DB{
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