const { required } = require('joi')
const mongoose = require("mongoose")
const {Schema}= mongoose

const OrderSchema = new Schema({
    name:{
        type:String,
        required:true
    }, 
    email:{
        type:String,
        required:true
    }, 
    payment_status:{
        type:String,
        required:true
    }, 
    paymentMethod:{
        type:String,
        required:true
    }, 
    country:{
        type:String,
        required:true
    }, 
    state:{
        type:String,
        required:true
    }, 
    orderNotes:{
        type:String,
        required:true
    }, 
    grandTotal:{
        type:Number,
        required:true
    }, 
    order_status:{
        type:String,
        default:"proccessing"
    },
    products:{
        type:Array,
        required:true
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref:"user"
    },
    oderId:{
        type: String,
        required:true
    }
    

})

const Order = mongoose.model("order", OrderSchema)
module.exports = Order