const mongoose = require('mongoose')
const {Schema}= mongoose

const CategorySchema = new Schema({
    name:{
        type:String,
        required: true,
        validate:{
            validator: (value)=> value && value.length>3 && value.length<50,
            message:"The category name must be at least 3 characters long."
        }
    }
}) 

const Category = mongoose.model("category",CategorySchema)
module.exports = Category