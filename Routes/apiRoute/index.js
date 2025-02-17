const express = require('express')
const _ = express.Router()
const authRoute = require("../apiRoute/authRoute")
const productRoute = require("../apiRoute/productRoute")

_.use("/auth",authRoute )
_.use("/products",productRoute )

module.exports = _