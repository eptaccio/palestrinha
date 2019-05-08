const { config } = require('../../../config')
const axios = require('axios')
const Event = require('../model')

const getMeetup = async meetupId => {
  const { data } = await axios.get(`${config.meetupSiteBaseUrl}/events?event_id=${meetupId}`)
  const [result] = data.results
  return result
}

const findEvents = async (req, res) => {
  const { page = 1, limit = 20 } = req.query

  const { docs: events } = await Event.paginate({}, {
    page,
    limit,
    sort: {
      created_at: -1
    }
  })

  const finalEvents = await Promise.all(events.map(event => getMeetup(event.meetupId)))

  res.send({
    message: 'ok',
    data: finalEvents
  })
}

module.exports = {
  findEvents
}
