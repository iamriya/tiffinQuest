import Error from "../components/Error";
import Loading from "../components/Loading";
import { getAllVendors } from '../actions/vendorAction';
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

export default function Existingpackage() {
    const dispatch = useDispatch();
    const vendorsstate = useSelector(state => state.getAllVendorReducer);
    const { vendors, error, loading } = vendorsstate;
    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate;

    useEffect(() => {
        dispatch(getAllVendors());
    }, []);
    return (
        <div>

            <div className="row justify-content-center">
                {loading && (<Loading />)}
                {error && (<Error error={'Something Went Wrong'} />)}

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Cusine Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendors && vendors.map((vendor) =>
                            vendor.name === currentUser.name ? (
                                vendor.cusine_type[0] != null ? (
                                    <tr>
                                        <td>{vendor.cusine_type[0]}</td>
                                        <td>{vendor.prices[0][vendor.cusine_type[0]]}</td>
                                        <td>{vendor.category}</td>
                                        <td>
                                            <i className="fa fa-trash" />
                                            <i className="fa fa-edit ms-3" />
                                        </td>
                                    </tr>
                                ):null
                            ) : null
                        )}
                        {vendors && vendors.map((vendor) =>
                            vendor.name === currentUser.name ? (
                                vendor.cusine_type[1] != null ? (
                                    <tr>
                                        <td>{vendor.cusine_type[1]}</td>
                                        <td>{vendor.prices[0][vendor.cusine_type[1]]}</td>
                                        <td>{vendor.category}</td>
                                        <td>
                                            <i className="fa fa-trash" />
                                            <i className="fa fa-edit ms-3" />
                                        </td>
                                    </tr>
                                ):null
                            ) : null
                        )}
                       {vendors && vendors.map((vendor) =>
                            vendor.name === currentUser.name ? (
                                vendor.cusine_type[2] != null ? (
                                    <tr>
                                        <td>{vendor.cusine_type[2]}</td>
                                        <td>{vendor.prices[0][vendor.cusine_type[2]]}</td>
                                        <td>{vendor.category}</td>
                                        <td>
                                            <i className="fa fa-trash" />
                                            <i className="fa fa-edit ms-3" />
                                        </td>
                                    </tr>
                                ):null
                            ) : null
                        )}
                        {vendors && vendors.map((vendor) =>
                            vendor.name === currentUser.name ? (
                                vendor.cusine_type[3] != null ? (
                                    <tr>
                                        <td>{vendor.cusine_type[3]}</td>
                                        <td>{vendor.prices[0][vendor.cusine_type[3]]}</td>
                                        <td>{vendor.category}</td>
                                        <td>
                                            <i className="fa fa-trash" />
                                            <i className="fa fa-edit ms-3" />
                                        </td>
                                    </tr>
                                ):null
                            ) : null
                        )}
                        {vendors && vendors.map((vendor) =>
                            vendor.name === currentUser.name ? (
                                vendor.cusine_type[4] != null ? (
                                    <tr>
                                        <td>{vendor.cusine_type[4]}</td>
                                        <td>{vendor.prices[0][vendor.cusine_type[4]]}</td>
                                        <td>{vendor.category}</td>
                                        <td>
                                            <i className="fa fa-trash" />
                                            <i className="fa fa-edit ms-3" />
                                        </td>
                                    </tr>
                                ):null
                            ) : null
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

