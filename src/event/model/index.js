const { model, Schema } = require('mongoose')
const { paginate } = require('../../../lib/paginate')

const EventSchema = new Schema({
  meetupId: {
    type: String,
    unique: true
  }
}, {
  timestamps: true
})

EventSchema.plugin(paginate)

module.exports = model('Event', EventSchema)
