const DB = require('../db/db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const path = require('path')
const conf = require('dotenv').config({ path: path.resolve(__dirname, '../config/.env') }).parsed
const db = new DB()



class AuthController{

  async register({email, password, group}){
    const user = await db.findUser(email)
    if(user){
      return {status: 400, message: 'User already exists'}
    }
    const hashedPassword = await bcrypt.hash(password, 12)
    const newuser = new User({email, password: hashedPassword, group})
    await newuser.save()
    return {status: 201, message: 'User created'}
  }

  async login({email, password}){
    const user = await db.findUser(email);
    if(!user){
      return {status: 400, message: 'User does not exist'}
    }
    const match = await bcrypt.compare(password, user.password)
    if(!match){
      return {status: 400, message: 'Wrong password'}
    }
    const token = jwt.sign(
      {email: user.email, password: user.password, group: user.group},
      conf.SECRET,
      {expiresIn: '1h'}
    )
    return {status: 200, message: 'User is signed up', token}
  }

}

module.exports = AuthController