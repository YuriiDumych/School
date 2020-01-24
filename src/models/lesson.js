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
    type: Number,
    required: true
  },
  ordinalNumber: {
    type: Number,
    required: true
  }
})

module.exports = model('Lesson', lesson)