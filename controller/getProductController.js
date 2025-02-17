const Product = require('../model/productModel')

const getProductController = async (req,res)=>{
    const products = await Product.find().populate("category")
    res.send(products)
}

module.exports = getProductController