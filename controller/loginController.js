const bcrypt = require("bcrypt");
const User = require('../model/userModel')
var jwt = require('jsonwebtoken');

const loginController = async (req,res)=>{
    const {inputEmail, inputPassword}= req.body
    const user = await User.findOne({'email':inputEmail})
    if(!user){
        return res.send({error:"Incorrect Credential."})
    }

    const{email, password}= user

    bcrypt.compare(inputPassword, password, async function(err, result) {
        if (err) {
            console.error('Error comparing passwords:', err);
        } else if (result) {
            const token =  jwt.sign({_id:user._id}, process.env.JWT_PRIVATE_KEY,{expiresIn:"1h"})
            const resUser = await User.findOne({email}).select("name email role")
            res.send({user:resUser, token })
        } else {
            res.send({error:"Incorrect Credential!"})
        }
    });
}     

module.exports = loginController