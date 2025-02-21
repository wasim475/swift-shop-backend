const Stripe = require('stripe'); 

const stripe = require('stripe')(process.env.SECRET_KEY);
const stripePaymentController = async(req,res)=>{
    await Stripe.charges.create({
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    })  
} 

module.exports = stripePaymentController