const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const { userValidation } = require("../utility/validation");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");

const registrationController = async (req, res) => {
  const { error } = userValidation(req.body);
  if (error) {
    return res.send({error: error.details[0]?.message});
  } 
  try {
    const {name, email, password, phoneNumber}= req.body
    const existUser = await User.findOne({email})
    if(existUser){
        return res.send({error:`email already exist!`})
    }
    const otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
      });
    
    const hashPass = async(userPass, salt)=> {
            const hash = await bcrypt.hash(userPass, salt);
            return hash; 
    } 
    
    const newUser = await new User({name, email, phoneNumber,otp, "password": await hashPass(password,10)})
    if(!newUser){
        return res.send({error:"Something went wrong."}) 
    } 
    await newUser.save()
    res.send({success:"Registration successfull."})

  
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.BASE_EMAIL,
            pass: "aviy ikks yvkg rhpk",
          },
        });
    
        const info = await transporter.sendMail({
          from: `"Swift-Shop" ${process.env.BASE_EMAIL}`, 
          to: email, 
          subject: "Verify Your Email",
          html: `
          <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9; text-align: center;">
            <h2 style="color: #333;">🔐 Your Confirmation Code</h2>
            <p style="font-size: 18px; font-weight: bold; color: #555; background: #eee; padding: 10px; border-radius: 5px; display: inline-block;">
              ${otp}
            </p>
            <p style="color: #666;">Use this code to verify your account.</p>
            <a href="https://web.programming-hero.com/conceptual-session" target="_blank" 
               style="display: inline-block; padding: 10px 20px; margin-top: 10px; text-decoration: none; color: white; background-color: #28a745; border-radius: 5px; font-size: 16px;">
              ✅ Verify Now
            </a>
            
          </div>
        `,         
    });     
    {/* <p style="margin-top: 20px; font-size: 12px; color: #999;">If you didn't request this, please ignore this email.</p> */}
         
  } catch (error) {
    for (field in error.errors) {
      return res.send({error:error.errors[field]?.message});
    }
  }
};

module.exports = registrationController;
