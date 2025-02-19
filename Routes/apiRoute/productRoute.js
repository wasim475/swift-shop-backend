const express = require('express')
const _ = express.Router()
const createCategoryController = require('../../controller/createCategoryController')
const createProductController = require('../../controller/createProductController')
const getCategoryController = require('../../controller/getCategoryController')
const getProductController = require('../../controller/getProductController')
const deleteProductController = require('../../controller/deleteProductController')
const getProductByCategoryController = require('../../controller/getProductByCategoryController')
const getProductBySliderController = require('../../controller/getProductBySliderController')

_.post("/create-category",createCategoryController)
_.get("/get-category",getCategoryController)
_.post("/create-product",createProductController)
_.get("/get-product",getProductController)
_.get("/get-product/:id",getProductByCategoryController)
_.get("/get-sliderproduct",getProductBySliderController)
_.delete("/delete-product",deleteProductController)  

module.exports = _