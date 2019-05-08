
const express = require('express')

const bodyParser = require('body-parser')
const helmet = require('helmet')

const app = express()

const { logger, db } = require('./lib')
const { config } = require('./config')

const { eventRoutes } = require('./src/event/routes')

db.connect()

app.use(bodyParser.json())
app.use(helmet())

app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message })
  next(err)
})

app.use('/event', eventRoutes)

app.listen(config.APP_PORT, function () {
  logger.info(`running on ${config.APP_PORT}`)
})
