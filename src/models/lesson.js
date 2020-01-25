const {Schema, model, Types} = require('mongoose')

const lesson = new Schema({
  topic: {
    type: String,
    required: true
  },
  teacher: {
    type: Types.ObjectId,
    ref: 'Teacher'
  },
  group: {
    type: Types.ObjectId,
    ref: 'Group'
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