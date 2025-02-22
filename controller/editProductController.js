const Product = require('../model/productModel')

const editProductController = async (req,res)=>{
    const {id}=req.params
    const {name, imageLink, inStock,price} = req.body
    const updateProduct = await Product.findByIdAndUpdate({'_id':id},{name, imageLink, inStock, price},{new:true,runValidators: true})
    if(!updateProduct){
        res.send({error:""}) 
    }
    res.send({success:"Product update successfully!"})
    
}
module.exports =editProductController
