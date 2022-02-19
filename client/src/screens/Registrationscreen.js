import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { registerUser } from '../actions/userAction';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';

export default function Registrationscreen() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [address, setaddress] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const registerState = useSelector(state=>state.registerUserReducer);
    const {error, loading, success} = registerState;
    const dispatch = useDispatch();
    function register(){
        if(password!=cpassword){
            alert('Password not matched');
        }
        else{
            const user={
                name,
                email,
                address,
                password
            }
            console.log(user);
            dispatch(registerUser(user));
        }
    }

    return (
        <div>
            <div className='row justify-content-center mt-5 '>
                <div className='col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-body rounded'>
                    {loading && (<Loading/>)}
                    {success && (<Success success={'User Registered Succesfully'} />)}
                    {error && (<Error error={"Email Id Already Exist"} />)}

                    <div><h2 className='text-center m-3'>Registration Page</h2></div>
                    <div>
                        <input type="text" placeholder="Enter Name" className='form-control' value={name} required onChange={(e) => { setname(e.target.value) }} />
                        <input type="text" placeholder="Enter Email" className='form-control' value={email} required onChange={(e) => { setemail(e.target.value) }} />
                        <input type="text" className="form-control" id="inputAddress" placeholder="Enter Address" value={address} required onChange={(e) => { setaddress(e.target.value) }}/>
                        <input type="text" placeholder="Enter Password" className='form-control' value={password} required onChange={(e) => { setpassword(e.target.value) }} />
                        <input type="text" placeholder="Confirm Password" className='form-control' value={cpassword} required onChange={(e) => { setcpassword(e.target.value) }} />
                        <button className='btn mt-3 mb-2' onClick={register}>REGISTER</button><br/>
                        <a href='/login'>Click here to login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
