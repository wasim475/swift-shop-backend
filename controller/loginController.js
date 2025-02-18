const bcrypt = require("bcrypt");
const User = require('../model/userModel')

const loginController = async (req,res)=>{
    const {inputEmail, inputPassword}= req.body
    const user = await User.findOne({'email':inputEmail})
    if(!user){
        return res.send({error:"Incorrect Credential."})
    }

    const{email, password}= user

    bcrypt.compare(inputPassword, password, function(err, result) {
        if (err) {
            console.error('Error comparing passwords:', err);
        } else if (result) {
            res.send({success:"Login Successfull!"})
        } else {
            res.send({error:"Incorrect Credential!"})
        }
    });
}     

module.exports = loginController