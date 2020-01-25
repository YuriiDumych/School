const {Schema, model, Types} = require('mongoose')

const group =  new Schema({
  name: {
    type: String,
    required: true
  },
  students: [{type: Types.ObjectId, ref: 'User'}]
})

module.exports = model('Group', group)