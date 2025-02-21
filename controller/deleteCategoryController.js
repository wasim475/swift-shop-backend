const Category = require('../model/categoryModel')

const deleteCategoryController = async (req,res)=>{
    const {id}= req.params
    
    const deleteCat = await Category.findByIdAndDelete({"_id":id},{new:true})
    console.log(deleteCat)
    if(!deleteCat){ 
        return res.send({error:"Fail to Delete!"})
    }
    return res.send({success:"Delete Category Successfully!"})
}  
  
module.exports = deleteCategoryController 