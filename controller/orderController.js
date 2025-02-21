const Order = require("../model/orderModel");
const nodemailer = require("nodemailer");

const orderController = async (req, res) => {
  const {
    name,
    email,
    paymentMethod,
    grandTotal,
    country,
    state,
    orderNotes,
    payment_status,
    session_id,
    products,
    oderId
  } = req.body;
  const isExist = await Order.findOne({ oderId });
  if (isExist) {
    return console.log("exist");
  }
  const order = await new Order({
    name,
    email,
    paymentMethod,
    grandTotal,
    country,
    state,
    orderNotes,
    payment_status,
    products,
    oderId
  });

  await order.save();

  res.send({success:"order confirm."})

  if (payment_status) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.BASE_EMAIL,
        pass: "aviy ikks yvkg rhpk",
      },
    });

    const userInfo = await transporter.sendMail({
      from: `"Swift-Shop" ${process.env.BASE_EMAIL}`,
      to: email,
      subject: "Order Confirmation!",
      html: `<div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9; text-align: center;">
  <h2 style="color: #333;">🎉 Your Order is Confirmed!</h2>
  <p style="font-size: 18px; font-weight: bold; color: #555; background: #eee; padding: 10px; border-radius: 5px; display: inline-block;">
    Order Number: #${oderId}
    Order Amount: ${grandTotal} ${payment_status === "Paid" ? "(paid)": "(COD)"} 
  </p>
  <p style="color: #666;">Thank you for shopping with us! Your order has been successfully placed. We are processing it and will update you shortly.</p>
  <a href="https://web.programming-hero.com/conceptual-session" target="_blank" 
     style="display: inline-block; padding: 10px 20px; margin-top: 20px; text-decoration: none; color: white; background-color: #28a745; border-radius: 5px; font-size: 16px;">
    View Your Order details
  </a>
</div>`,
    });

    const adminInfo = await transporter.sendMail({
        from: `"Swift-Shop" ${process.env.BASE_EMAIL}`,
        to: process.env.ADMIN_EMAIL,
        subject: "New Order Received!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9; text-align: center;">
            <h2 style="color: #333;">🎉 New Order Received!</h2>
            <p style="color: #666;">You have received a new order. Here are the details:</p>
            <div style="margin-top: 20px; text-align: left; font-size: 14px; color: #333;">
              <p><strong>Customer Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Order ID:</strong> ${oderId}</p>
              <p><strong>Payment Method:</strong> ${paymentMethod} ${payment_status === "Paid" ? "(Paid)": "(COD)"}</p>
              <p><strong>Grand Total:</strong> $${grandTotal}</p>
              <p><strong>Shipping Address:</strong> ${state}, ${country}</p>
              <p><strong>Order Notes:</strong> ${orderNotes}</p>
              <p><strong>Status:</strong> ${payment_status}</p>
            </div>
          </div>
        `,
      });
  }
};

module.exports = orderController;
