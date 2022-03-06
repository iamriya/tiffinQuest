import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getUserOrders}  from '../actions/orderAction'
import Error from '../components/Error';
import Loading from '../components/Loading';

export default function Ordersscreen() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUserOrders())
  },[])
  const orderstate = useSelector(state=>state.getUserOrderReducer);
  const {Orders, loading, error} = orderstate;

  return(
    <div>
      <h2>My Orders</h2>
      <div className='row justify-content-center' >
        {loading && (<Loading/>)}
        {error && (<Error error='Something went wrong'/>)}
        {Orders && Orders.map(order=>{
            return <div className='col-md-8' style={{margin: '20px', backgroundColor:'LightGray', padding:'10px'}}>

                  <div className='text-start w-100 m-1'>
                      <p style={{fontSize:'25px'}} >Order Info</p>
                      <hr/>
                      <p> Order Amount: {order.orderAmount}</p>
                      <p> Date: {order.createdAt.substring(0,10)}</p>
                      <p> Transaction Id: {order.transactionId}</p>
                      <p> Order Id: {order._id}</p>
                  </div>
                  <hr/>
                  <div className='flex-container'>
                      <div className='text-start w-100 m-1'>
                        <p style={{fontSize:'25px'}}>Items</p>
                        <hr/>
                            {order.orderItems.map(item=>{
                              return <div>
                                <p>{item.name} [{item.cusine_type}]<br/> {item.price/item.quantity} * {item.quantity} = {item.price}</p>
                              </div>
                            })} 
                      </div>
                      
                      <div className='text-start w-100 m-1'>
                        <p style={{fontSize:'25px'}}>Address</p>
                        <hr/>
                        <p> Street: {order.shippingAddress.street}</p>
                        <p> City: {order.shippingAddress.city}</p>
                        <p> Country: {order.shippingAddress.country}</p>
                        <p> Pincode: {order.shippingAddress.pincode}</p>
                      </div>
                     
                  </div>
              </div>

        })}
      </div>
    </div>
  )
  
}
