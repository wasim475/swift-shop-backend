const User = require('../model/userModel')

const getAllUsersController = async(req,res)=>{
    const customers = await User.find().select("name email phoneNumber role")
    res.send(customers)
}

module.exports= getAllUsersController