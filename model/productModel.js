const mongoose = require('mongoose')
const {Schema}= mongoose

const ProductSchema = new Schema({
    name:{
        type:String,
        required: true,
        validate:{
            validator: (value)=> value && value.length>3 && value.length<50,
            message:"The product name must be at least 3 characters long."
        }
    }
}) 

const Product = mongoose.model("product",ProductSchema)
module.exports = Product