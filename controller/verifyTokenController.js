const verifyTokenController = async(req,res)=>{
    console.log(req)
    res.json({ message: "Token is valid", user: req.user })
}  
   
module.exports = verifyTokenController 