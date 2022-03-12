const express = require("express");
const router = express.Router();
const stripe = require('stripe')('sk_test_51KiFOQKqc27UY0kvH9XffrMI5VGLSG8lesRvmXI8yFeb5RVHPxzkhl5bYJzDIABGQazYciTz0dPA0ZDB49Sq9u9L00ZOCPfDV8')
const { v4: uuidv4 } = require('uuid');
const Order = require('../models/orderModel')
router.post('/placeorder', async(req,res)=>{

    const {token, subtotal, currentUser, cartItems} = req.body
    try{ 
        const customer = await stripe.customers.create({
            email:token.email,
            source: token.id
        });
        const payment = await stripe.charges.create({
            amount: subtotal*100,
            currency:'CAD',
            customer:customer.id,
            receipt_email: token.email
        },{
            idempotencyKey: uuidv4()
        });

        if (payment){

            const neworder = new Order({
                name: currentUser.name,
                email: token.email,
                userid: currentUser._id,
                orderItems: cartItems,
                shippingAddress: {
                    street: token.card.address_line1,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    pincode: token.card.address_zip
                },
                orderAmount: subtotal,
                transactionId: payment.source.id
            });

            neworder.save();
            res.send('Order Placed Successfully');
        } else {
            res.send('Payment Failed');
        }
    } catch (error){
        return res.status(400).json({message:'something went wrong'+ error});
    }
});

router.post('/getuserorders', async(req,res)=>{
    const {userid} = req.body
    try{
        const orders = await Order.find({userid: userid}).sort({_id:-1})
        res.send(orders)
    } catch(error){
        return res.status(400).json({message:'something went wrong'+error})
    }
});

router.get('/getallorders', async(req,res)=>{
    
    try{
        const orders = await Order.find({})
        res.send(orders)
    } catch(error){
        return res.status(400).json({message:'something went wrong'+error})
    }
});
module.exports = router