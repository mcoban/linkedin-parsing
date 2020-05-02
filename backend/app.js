const express = require('express')

const personRouter = require('./resources/person/person.router')
const companyRouter = require('./resources/company/company.router')
const jobRouter = require('./resources/job/job.router')
const locationRouter = require('./resources/location/location.router')
const app = express()

// middlewares
app.use(express.json())

app.use('/api/v1/people', personRouter)
app.use('/api/v1/companies', companyRouter)
app.use('/api/v1/jobs', jobRouter)
app.use('/api/locations', locationRouter)

module.exports = app