const express = require('express')
const _ = express.Router()
const createCategoryController = require('../../controller/createCategoryController')
const createProductController = require('../../controller/createProductController')

_.post("/create-category",createCategoryController)
_.post("/create-product",createProductController)

module.exports = _