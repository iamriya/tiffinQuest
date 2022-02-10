import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartAction';

export default function Vendor({ vendor }) {
    const [quantity, setquantity] = useState(1)
    const x = vendor.cusine_type[0]
    const [cusine_type, setcusine_type] = useState(x)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    function addtocart(){
        dispatch(addToCart(vendor, quantity, cusine_type));
    }

    return (
        <div className="shadow-lg p-3 mb-5 bg-body rounded" key={vendor._id}>
            <div onClick={handleShow}>
                <h1>{vendor.name}</h1>
                <img src={vendor.image} className='img-fluid' style={{ width: '400px', height: '200px' }} />
            </div>
            <div className='flex-container'>
                <div className='w-100 m-2'>
                    <p>Cusine Type</p>
                    <select className='form-select' value={cusine_type} onChange={(e) => { setcusine_type(e.target.value) }}>
                        {vendor.cusine_type.map(cusine_type => {
                            return <option value={cusine_type}>{cusine_type}</option>
                        })}
                    </select>
                </div>

                <div className='w-100 m-2'>
                    <p>Quantity</p>
                    <select className='form-select' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className='flex-container'>
                <div className='m-1 w-100'>
                    <h1 className='m-2' >price: ${vendor.prices[0][cusine_type] * quantity}</h1>
                </div>
                <div className='m-1 w-100'>
                    <button className='btn' onClick={addtocart}>ADD TO CART</button>
                </div>
            </div>
            {/* ------- Open Modal Code ------- */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{vendor.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={vendor.image} className='img-fluid' style={{ width: '300px', height: '200px' }} />
                    <div style={{margin:'5px'}}>
                    <p style={{margin:'-1px'}}>Rating: {vendor.rating} ⭑</p>
                    <p style={{margin:'-1px'}}>Category: {vendor.category}</p>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>
            {/* ------- Close Modal Code ------- */}
        </div>
    )
}
