const Event = require('../model')

const createEvent = async (req, res) => {
  const { meetupId } = req.body

  const event = new Event({
    meetupId
  })

  await event.save()

  res.send({
    message: 'ok',
    data: event
  })
}

module.exports = {
  createEvent
}
