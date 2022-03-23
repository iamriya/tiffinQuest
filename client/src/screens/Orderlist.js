
import Error from "../components/Error";
import Loading from "../components/Loading";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders } from "../actions/orderAction";

export default function Orderlist() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  const orderstate = useSelector(state=>state.getAllOrderReducer);
  const {Orders, loading, error} = orderstate;
  
  return (
    <div>
      <h2>Orders</h2>
      <div className='row justify-content-center' >
        {loading && (<Loading/>)}
        {error && (<Error error='Something went wrong'/>)}

        <table className="table table-striped table-bordered">
          <thead >
            <tr>
              <th>Order ID</th>
              <th>Email ID</th>
              <th>User ID</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {Orders && Orders.map(order=>{
              return <tr>
                <td>{order._id}</td>
                <td>{order.email }</td>
                <td>{order.userid}</td>
                <td>{order.orderAmount}</td>
                <td>{order.createdAt.substring(0,10)}</td>
              </tr>
            })}
          </tbody>
        </table>
       </div>
       </div>)
}
