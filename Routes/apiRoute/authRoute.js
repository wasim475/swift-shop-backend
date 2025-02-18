const express = require('express')
const registrationController = require('../../controller/registrationController')
const loginController = require('../../controller/loginController')
const _ = express.Router()

_.post("/registration",registrationController)
_.post("/login",loginController)

module.exports = _