const express = require('express')
const registrationController = require('../../controller/registrationController')
const loginController = require('../../controller/loginController')
const getAllUsersController = require('../../controller/getAllUsersController')
const _ = express.Router()

_.post("/registration",registrationController)
_.post("/login",loginController)
_.get("/allusers",getAllUsersController)
 
module.exports = _