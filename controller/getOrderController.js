const Order = require('../model/orderModel')

const getOrderController = async (req,res)=>{
    const orders = await Order.find().select("paymentMethod payment_status order_status grandTotal oderId")
    res.send(orders)
}

module.exports = getOrderController