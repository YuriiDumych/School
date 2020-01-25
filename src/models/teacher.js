const {Schema, model} = require('mongoose')

const teacher = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  }
})

module.exports = model('Teacher', teacher)