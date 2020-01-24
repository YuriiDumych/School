const jwt = require('jsonwebtoken')
const path = require('path')
const config = require('dotenv').config({ path: path.resolve(__dirname, '../config/.env') }).parsed
module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {

    const token = req.headers.authorization 

    if (!token) {
      return res.status(401).json({ message: 'Not authorized' })
    }

    const decoded = jwt.verify(token, config.SECRET)
    if(req.method == 'PUT'){
      if(req.body.payload.group != decoded.group){
        return res.status(403).json({message: 'Forbidden'})
      }
    } else {
      if(req.body.group != decoded.group){
        return res.status(403).json({message: 'Forbidden'})
      }
    } 
    next()

  } catch (e) {
    res.status(401).json({ message: 'Not authorized' })
  }
}