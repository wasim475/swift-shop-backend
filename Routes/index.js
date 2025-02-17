const express = require('express')
const _ = express.Router()
const apiRoute = require("./apiRoute")
const api = process.env.BASE_URL
_.use(api,apiRoute)

module.exports = _