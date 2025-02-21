const Order = require('../model/orderModel')
const nodemailer = require("nodemailer");

const orderStatusController = async(req,res)=>{
    const {oderId,order_status} =req.body
    const updateOrder = await Order.findOneAndUpdate({oderId},{order_status},{new:true})
    if(!updateOrder){
        return res.send({error:"something went wrong."})
    }
    
    res.send({success:`oreder status changed to ${order_status}`})

    if (order_status) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.BASE_EMAIL,
            pass: "aviy ikks yvkg rhpk",
          },
        });
    
        const userInfo = await transporter.sendMail({
          from: `"Swift-Shop" ${process.env.BASE_EMAIL}`,
          to: updateOrder.email,
          subject: `${order_status==="Confirm"?"Order Confirmation!":order_status==="Shipped"?"Your Order is Shipped!":order_status==="Complete" ? "🎉 Order Delivered Successfully!":"Your order is now proccessing."}`,
          html: `<div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9; text-align: center;">
      <h2 style="color: #333;">${order_status==="Confirm"?"🎉 Your Order is Confirmed!🎉 Your Order is Shipped!":order_status==="Complete" ? "🎊 Your Order has been Delivered!":"Your order is now in proccessing."}</h2>
      <p style="font-size: 18px; font-weight: bold; color: #555; background: #eee; padding: 10px; border-radius: 5px; display: inline-block;">
        Order Number: #${oderId}
        Order Amount: ${updateOrder.grandTotal} ${updateOrder.payment_status === "Paid" ? "(paid)": "(COD)"} 
      </p>
      <p style="color: #666;">Thank you for shopping with us!.</p>
      <a href="https://web.programming-hero.com/conceptual-session" target="_blank" 
         style="display: inline-block; padding: 10px 20px; margin-top: 20px; text-decoration: none; color: white; background-color: #28a745; border-radius: 5px; font-size: 16px;">
        View Your Order details
      </a>
    </div>`,
        });
    
        
      }
}

module.exports = orderStatusController