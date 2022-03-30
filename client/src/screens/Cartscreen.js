import React from "react";
import { useSelector, useDispatcher, useDispatch } from 'react-redux';
import { addToCart, deleteFromCart } from '../actions/cartAction';
import Checkout from "../components/Checkout";

export default function Cartscreen() {
    const cartstate = useSelector(state => state.cartReducer);
    const cartItems = cartstate.cartItems;
    const dispatch = useDispatch();
    var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-7 ">
                    <h2 style={{ fontSize: '40px' }}>My Cart</h2>
                    {cartItems.map((item) => {
                        return (
                            <div className="flex-container">
                                <div className="text-start m-1 w-100">
                                    <h1>{item.name} [{item.cusine_type}]</h1>
                                    <h1>Price: {item.quantity} * {item.prices[0][item.cusine_type]} = {item.price}</h1>
                                    <h1 style={{ display: 'inline' }}>Quantity: </h1>
                                    <i className="fa fa-plus" onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.cusine_type)) }} arian-hidden="true"></i>
                                    <b>{item.quantity}</b>
                                    <i className="fa fa-minus" onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.cusine_type)) }} arian-hidden="true"></i>
                                    <hr />
                                </div>
                                <div className="w-100 m-1">
                                    <img src={item.image} style={{ height: '80px', width: '120px' }} />
                                </div>
                                <div className="w-100 m-1">
                                    <i className="fa fa-trash mt-5" onClick={() => { dispatch(deleteFromCart(item)) }} arian-hidden="true"></i>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="col-md-4 text-end">
                    <h2 style={{ fontSize: '40px' }}>SubTotal: ${subtotal}</h2>
                    <Checkout subtotal={subtotal} />
                </div>

            </div>
        </div>
    )
}