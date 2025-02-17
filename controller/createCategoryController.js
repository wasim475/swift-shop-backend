const Category = require('../model/categoryModel')
const { categoryValidation } = require('../utility/validation')

const createCategoryController = async(req,res)=>{
    const {error}= categoryValidation(req.body)
    if(error){
        return res.send({error: error.details[0].message})
    }
   try {
    const {name}= req.body
    const isExist = await Category.findOne({name:{$regex: new RegExp(name,"i")} })
    if(isExist){
        return res.send({warn:`${name} already exist!`})
    }
    const category = await new Category({name})
    await category.save()
    if(category){
        res.send({success:"Category Created Successfully."})
    }
    
   } catch (error) {
    for(field in error.errors){
        return error.errors[field].message
    }
   }
        
}

module.exports = createCategoryController