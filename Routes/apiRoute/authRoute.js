const express = require('express')
const registrationController = require('../../controller/registrationController')
const loginController = require('../../controller/loginController')
const getAllUsersController = require('../../controller/getAllUsersController')
const authMiddleware = require('../../authMiddleware/middleWare')
const verifyTokenController = require('../../controller/verifyTokenController')
const _ = express.Router()

_.post("/registration",registrationController)
_.post("/login",loginController)
_.get("/allusers",getAllUsersController)
_.get("/verify-token",authMiddleware,verifyTokenController)
 
module.exports = _