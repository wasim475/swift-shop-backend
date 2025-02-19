const Product = require('../model/productModel')

const getProductBySliderController = async (req,res)=>{
    const { minPrice, maxPrice } = req.query
    const min = parseInt(minPrice)
    const max = parseInt(maxPrice)
    const product = await Product.find({"price":{$gte:min , $lte: max}})
    if(!product){
        return res.send({error:"No product found"})
    }

    res.send(product)
}               
   
module.exports = getProductBySliderController