const express = require('express')
const _ = express.Router()
const createCategoryController = require('../../controller/createCategoryController')
const createProductController = require('../../controller/createProductController')
const getCategoryController = require('../../controller/getCategoryController')
const getProductController = require('../../controller/getProductController')
const deleteProductController = require('../../controller/deleteProductController')
const getProductByCategoryController = require('../../controller/getProductByCategoryController')
const getProductBySliderController = require('../../controller/getProductBySliderController')
const stripePaymentController = require('../../controller/stripePaymentController')
const orderController = require('../../controller/orderController')
const getOrderController = require('../../controller/getOrderController')
const orderStatusController = require('../../controller/orderStatusController')
const editCategoryController = require('../../controller/editCategoryController')
const deleteCategoryController = require('../../controller/deleteCategoryController')
const editProductController = require('../../controller/editProductController')

_.post("/create-category",createCategoryController)
_.get("/get-category",getCategoryController)
_.patch("/edit-category/:id",editCategoryController)
_.delete("/category/:id",deleteCategoryController)
_.post("/create-product",createProductController) 
_.get("/get-product",getProductController)
_.patch("/product/:id",editProductController)
_.get("/get-product/:id",getProductByCategoryController)
_.get("/get-sliderproduct",getProductBySliderController)
_.delete("/product/:id",deleteProductController)  
_.post("/order",orderController)     
_.get("/get-order",getOrderController)     
_.patch("/order-status",orderStatusController)     

module.exports = _