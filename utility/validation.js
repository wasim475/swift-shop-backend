const Joi = require("joi")

 const categoryValidation = (category)=>{
    const categorySchema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
    })
    return categorySchema.validate(category)
} 
 const productValidation = (product)=>{
    const productSchema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        description: Joi.string().min(3).max(150).required(),
        imageLink: Joi.string().min(3).required(),
        price: Joi.number().min(10).required(),
        inStock: Joi.number().min(1).required(),
        outOfStock: Joi.boolean(),
        categoryId:Joi.string()  
    })
    return productSchema.validate(product)
} 
 
module.exports = {categoryValidation,productValidation}

