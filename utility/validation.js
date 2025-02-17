const Joi = require("joi")

 const categoryValidation = (category)=>{
    const categorySchema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
    })
    return categorySchema.validate(category)
} 
 
module.exports = categoryValidation

