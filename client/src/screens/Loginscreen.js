import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userAction';
import Error from '../components/Error';
import Loading from '../components/Loading';

export default function Loginscreen() {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const dispatch = useDispatch();
  const loginstate = useSelector(state=>state.loginUserReducer);
  const {loading, error} = loginstate;
  useEffect(() => {
    if (localStorage.getItem('currentUser')){
      window.location.href = '/';
    }
  }, [])

  function login() {
    const user = {
      email,
      password
    }
    console.log(user);
    dispatch(loginUser(user));
  }
  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-body rounded'>
          
          {loading && (<Loading/>)}
          {error && (<Error error={'Invalid Credentials'}/>)}

          <div><h2 className='text-center m-3'>Login Page</h2></div>
          <div>
            <input type="text" placeholder="Enter Email" className='form-control' value={email} required onChange={(e) => { setemail(e.target.value) }} />
            <input type="text" placeholder="Enter Password" className='form-control' value={password} required onChange={(e) => { setpassword(e.target.value) }} />
            <button className='btn mt-3 mb-2' onClick={login}>LOGIN</button> <br/>
            <a href='/register'>Click here to Register</a>
          </div>
        </div>
      </div>
    </div>
  )
}
