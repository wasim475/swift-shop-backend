const Category = require('../model/categoryModel')


const getCategoryController = async (req,res)=>{
    const categories = await Category.find()
    res.send(categories)
}
 
module.exports = getCategoryController