const express = require('express')
const _ = express.Router()
const authRoute = require("../apiRoute/authRoute")
_.use("/auth",authRoute )
module.exports = _