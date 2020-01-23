const Auth = require('../db/auth')
const DB = new Auth()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user');
require('dotenv').config({path: '../config/.env'})



class AuthController{
  async register({email, password, group}){
    const user = await DB.findUser(email)
    if(user){
      return {status: 400, message: 'User already exists'}
    }
    const hashedPassword = await bcrypt.hash(password, 12)
    const newuser = new User({email, password: hashedPassword, group})
    await newuser.save()
    return {status: 201, message: 'User created'}
  }



}

module.exports = AuthController