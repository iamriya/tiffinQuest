<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllVendors } from '../actions/vendorAction';
import Error from "../components/Error";
import Loading from "../components/Loading";
import Vendor from "../components/vendor";

export default function Homescreen() {
    const dispatch = useDispatch();
    const vendorsstate = useSelector(state => state.getAllVendorReducer);
    const { vendors, error, loading } = vendorsstate;

    useEffect(() => {
        dispatch(getAllVendors());
    }, []);

    return (

        <div>
            <div className="row justify-content-center">
                {loading ? <Loading/> : error ? <Error error={'Something Went Wrong'}/> : (
                    vendors.map((vendor) => {
                        return (
                            <div className="col-md-3 m-3"  key={vendor._id}>
                                <div>
                                    <Vendor vendor={vendor} />
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    )
};
=======
import React from "react";

export default function Homescreen() {
    return (
        <div>
            homescreen;
        </div>
    )
}
>>>>>>> f4f29f025f7ae28548502b5b87e54d8b9196dd67
