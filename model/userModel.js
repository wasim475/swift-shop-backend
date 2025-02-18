const { required, number } = require('joi')
const mongoose = require("mongoose")
const {Schema}= mongoose

const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
        validate:{
            validator: (value)=> value && value.length>3,
            message:"User Name must be at least 3 characters long."
        }
    },
    email:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: Number,
        required: true,
    },
    password:{
        type: String,
        required: true,
        validate:{
            validator: (value)=> value && value.length=>6 && value.length<=20,
            message:"User name must be at least 6 characters long."
        }
        
    },
})

const User = mongoose.model("user",UserSchema)
module.exports = User