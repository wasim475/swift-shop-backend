const express = require('express')
const _ = express.Router()
const createCategoryController = require('../../controller/createCategoryController')

_.post("/create-category",createCategoryController)

module.exports = _