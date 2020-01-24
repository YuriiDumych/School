const {Schema, model} = require('mongoose')

const lesson = new Schema({
  topic: {
    type: String,
    required: true
  },
  teacher: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  },
  room: {
    type: String,
    required: true
  },
  ordinalNumber: {
    type: Number,
    required: true
  }
})

module.exports = model('Lesson', lesson)