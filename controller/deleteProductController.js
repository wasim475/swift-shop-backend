const Product = require('../model/productModel')

const deleteProductController = async (req,res)=>{
    const {productId}= req.body
    const deleteProduct = await Product.findByIdAndDelete({"_id":productId})
    if(deleteProduct){
        res.send({success:"Product has been deleted."})
    }
}

module.exports = deleteProductController