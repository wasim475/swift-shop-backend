const { number, boolean } = require('joi')
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
    },
    description:{
        type:String,
        required: true,
        validate:{
            validator: (value)=> value && value.length>3 && value.length<250,
            message:"The product description must be at least 3 characters long."
        }  
    },
    imageLink:{
        type:String,
        required: true,
        validate:{
            validator: (value)=> value && value.length>3,
            message:"The image link must be at least 3 characters long."
        }  
    },
    price:{
        type:Number,
        required: true,
        validate:{
            validator: (value)=> value && value >10,
            message:"The product price must be at least 10."
        }  
    },
    inStock:{
        type:Number,
        required: true,
        validate:{
            validator: (value)=> value && value >0,
            message:"In stock value must be at least 1."
        }  
    }, 
    outOfStock:{
        type:Boolean,
        default: false  
    },
    categoryId:{
        type:  mongoose.Types.ObjectId,
        ref: "category"
    }
}) 

const Product = mongoose.model("product",ProductSchema)
module.exports = Product