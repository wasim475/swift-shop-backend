const { userValidation } = require('../utility/validation')

const registrationController = async (req,res)=>{
    const {error}= userValidation(req.body)
    if(error){
        return res.send({error:error})
    }
    try {
        
    } catch (error) {
        
    }
    res.send("registration")
}

module.exports = registrationController