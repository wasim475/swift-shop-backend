const Product = require('../model/productModel')

const getProductByCategoryController = async (req,res)=>{
    console.log()    
    const specificCatProduct = await Product.find(req.params.id)
    res.send(specificCatProduct)
}
  
module.exports = getProductByCategoryController