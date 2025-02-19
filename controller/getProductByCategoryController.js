const Product = require('../model/productModel')

const getProductByCategoryController = async (req,res)=>{
    const specificCatProduct = await Product.find({"category":req.params.id}).populate("category")
    res.send(specificCatProduct)
}   
        
module.exports = getProductByCategoryController