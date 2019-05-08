const Event = require('../model')

const findEvent = async (req, res) => {
  const { id } = req.params

  const event = await Event.findOne({
    _id: id
  })

  res.send({
    message: 'ok',
    data: event
  })
}

module.exports = {
  findEvent
}
