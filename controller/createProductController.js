const Product = require('../model/productModel')
const { productValidation } = require('../utility/validation')

const createProductController = async (req,res)=>{
    const {error} = productValidation(req.body)
    if(error){
        return res.send({error: error.details[0].message})
    }

    try {
        const {name,description, price, imageLink, categoryId, inStock}= req.body
        const product = await new Product({name,description, price, imageLink,inStock, categoryId})
        await product.save() 
        if(!product){
            return res.send({error:"Something went wrong."})
        }
        res.send({success:"Product created successfully."})
    } catch (error) {
        for(field in error.errors){
            return error.errors[field].message
        }
    }
}

module.exports =createProductController