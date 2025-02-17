const express = require('express')
const registrationController = require('../../controller/registrationController')
const _ = express.Router()

_.post("/registration",registrationController)

module.exports = _