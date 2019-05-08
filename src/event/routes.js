const { Router } = require('express')

const {
  findEvents,
  findEvent,
  createEvent
} = require('./controller')

const eventRoutes = Router()

eventRoutes.get('/', findEvents)
eventRoutes.post('/', createEvent)
eventRoutes.get('/:id', findEvent)

module.exports = {
  eventRoutes
}
