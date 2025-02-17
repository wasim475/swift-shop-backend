const express = require('express')
const _ = express.Router()
const createCategoryController = require('../../controller/createCategoryController')
const createProductController = require('../../controller/createProductController')
const getCategoryController = require('../../controller/getCategoryController')
const getProductController = require('../../controller/getProductController')

_.post("/create-category",createCategoryController)
_.get("/get-category",getCategoryController)
_.post("/create-product",createProductController)
_.get("/get-product",getProductController)

module.exports = _