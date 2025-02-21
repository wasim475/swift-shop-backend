const Category = require('../model/categoryModel')

const editCategoryController = async (req,res)=>{
    const {id}= req.params
    const {name}= req.body
    const updateCategory = await Category.findByIdAndUpdate({"_id":id},{name},{new:true})
    if(!updateCategory){
        return res.send({error:"Update Fail!"})
    }
    return res.send({success:"Category name updated."})
}

module.exports= editCategoryController