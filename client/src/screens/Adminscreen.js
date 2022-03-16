import { Route, Switch } from 'react-router';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Addpackage from './Addpackage';
import Existingpackage from './Existingpackage';
import Orderlist from './Orderlist';
import Userlist from './Userlist';
import { Link } from 'react-router-dom';


export default function Adminscreen() {
    const userstate = useSelector(state => state.loginUserReducer);
    const dispatch = useDispatch();
    const { currentUser } = userstate;
    useEffect(() => {
        if (!currentUser.isAdmin) {
            window.location.href = '/'
        }

    }, []);

    return (
        <div>

            <div className='row justify-content-center'>
                <div className='col-md-10'>
                    <h2 style={{ fontsize: '25px' }}>Admin</h2>
                    <ul className='adminfunctions'>
                        <li>
                        
                            <Link to={'/admin/orderlist'} >Order List </Link>
                        </li>
                        <li>
                            <Link to={'/admin/existingpackage'} >Existing Package</Link>
                        </li>
                        <li>
                        <Link to={'/admin/addpackage'} >Add New Package </Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path='/admin' exact component={Existingpackage} />
                       
                        <Route path='/admin/orderlist' exact component={Orderlist} />
                        <Route path='/admin/existingpackage' exact component={Existingpackage} />
                        <Route path='/admin/addpackage' exact component={Addpackage} />
                    </Switch>
                </div>
            </div>

        </div>
    )
}
