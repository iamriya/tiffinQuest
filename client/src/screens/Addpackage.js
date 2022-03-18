import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPackage } from '../actions/vendorAction'
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success';

export default function Addpackage() {
  const [uname, setname] = useState('') 
  const [cusine_type, setcusinetype] = useState('')
  const [prices, setprices] = useState('')
  const [category, setcategory] = useState('')
  const [image, setimage] = useState('')
  const dispatch = useDispatch();
  
  const userstate = useSelector(state => state.loginUserReducer);
  const { currentUser } = userstate;

  const addpackagestate = useSelector((state) => state.addPackageReducer);
  const { success, error, loading } = addpackagestate;

  function formHandler(e){
    e.preventDefault();
    const addpackage = {
      uname,
      cusine_type,
      prices,
      category,
      image
    }
    console.log(addpackage)
    dispatch(addPackage(addpackage))
  }

  return (
    <div>
      <h1>Add Package</h1>
      {loading && (<Loading/>)}
      {error && (<Error error={'Something Went Wrong'}/>)}
      {success && (<Success success={'New Package Added Succesfully'} />)}
      
      <form className='text-start' onSubmit={formHandler}>
        <input className='form-control' type="text" placeholder='name' value={uname} onChange={(e)=>{setname(e.target.value)}} />
        <input className='form-control' type="text" placeholder='cusine_type' value={cusine_type} onChange={(e)=>{setcusinetype(e.target.value)}} />
        <input className='form-control' type="text" placeholder='prices' value={prices} onChange={(e)=>{setprices(e.target.value)}} />
        <input className='form-control' type="text" placeholder='category' value={category} onChange={(e)=>{setcategory(e.target.value)}} />
        <input className='form-control' type="text" placeholder='image url ' value={image} onChange={(e)=>{setimage(e.target.value)}} />
        <button type='submit' className='btn mt-3'>Add Package</button>
      </form>


    </div>
  )
}

