export const addToCart = (vendor, quantity, cusine_type) => (dispatch, getState) => {

    var cartItem = {
        id: vendor._id,
        name: vendor.name,
        image: vendor.image,
        cusine_type: cusine_type,
        quantity: Number(quantity),
        prices: vendor.prices,
        price: vendor.prices[0][cusine_type] * quantity
    }
    if (cartItem.quantity > 10){
        alert('Atmost 10 Quantities alloweded')
    } 
    else {
        if (cartItem.quantity < 1){
            dispatch({ type: 'DELETE_TO_CART', payload: vendor });
        }
        else {
            dispatch({ type: 'ADD_TO_CART', payload: cartItem });
        }
    }
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const deleteFromCart = (vendor) => (dispatch, getState) => {
    dispatch({ type: 'DELETE_TO_CART', payload: vendor });
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}
