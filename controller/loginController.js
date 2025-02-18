const bcrypt = require("bcrypt");
const User = require('../model/userModel')

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
            const resUser = await User.findOne({email}).select("name email role")
            res.send({user:resUser})
        } else {
            res.send({error:"Incorrect Credential!"})
        }
    });
}     

module.exports = loginController