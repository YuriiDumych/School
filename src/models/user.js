const {Schema, model, Types} = require('mongoose')

const user = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  group: {
    type: Types.ObjectId,
    ref: 'Group'
  }
})


module.exports = model('User', user)