export const cartReducer = (state={cartItems: []}, action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            const alreadyExist = state.cartItems.find(item=> item.name === action.payload.name);
            
            if (alreadyExist){
                return {
                    ...state,
                    cartItems: state.cartItems.map(item=> item.name === action.payload.name ? action.payload: item)
                }
            }else{
                return {
                    ...state, 
                    cartItems: [...state.cartItems, action.payload]
                }
            }
       
        default: return state;
    }
}