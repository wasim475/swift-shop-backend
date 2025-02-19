const Product = require('../model/productModel')

const getProductByCategoryController = async (req,res)=>{
    const {id}= req.pararms
    const specificCatProduct = await Product.find({"_id":id})
    res.send(specificCatProduct)
}
        
module.exports = getProductByCategoryController