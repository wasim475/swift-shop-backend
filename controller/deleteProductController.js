const Product = require('../model/productModel')

const deleteProductController = async (req,res)=>{
    const {id}= req.params
    const deleteProduct = await Product.findByIdAndDelete({"_id":id})
    if(!deleteProduct){
       return res.send({error:"Product deletion fail!"})
    }

    return res.send({success:"Product deleted successfully!"})
}
 
module.exports = deleteProductController