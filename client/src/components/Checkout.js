import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {useDispatch, useSelector} from 'react-redux'
import { placeOrder } from '../actions/orderAction';
import Success from './Success';
import Error from '../components/Error';
import Loading from '../components/Loading';

export default function Checkout({subtotal}) {
    
    const orderstate = useSelector((state)=>state.placeOrderReducer )
    const { success, error, loading } = orderstate;
    const dispatch = useDispatch()
    function tokenHandler(token){
        console.log(token);
        dispatch(placeOrder(token, subtotal))
    }
  
    return (
        <div>

            {error && (<Error error={'Something went wrong'}/>)}
            {success && (<Success success={'Your order placed successfully'}/>)}
            
            
            <StripeCheckout
                amount={subtotal*100}
                shippingAddress
                token={tokenHandler}
                stripeKey="pk_test_51KiFOQKqc27UY0kvW6BLDnTvv1XOI2iczSKwWgdZc24GY8qR89aiDCtfE705bYR8kx3TsWciNqp7TlE2NVczAczp00IU0Oymcq"
                currency="CAD"
            >

                <button className='btn'>Pay now</button>
            </StripeCheckout>
        </div>
       
    
    
    )
}
