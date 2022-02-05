export const getAllVendorReducer = (state = {vendors: []}, action) => {

    switch (action.type) {
        case 'GET_VENDOR_REQUEST': return {
            loading: true, 
            ...state
        }
        case 'GET_VENDORS_SUCCESS': return {
            loading: false,
            vendors: action.payload
        }
        case 'GET_VENDORS_FAILED': return {
            loading: false,
            vendors: action.payload
        }
        default: return state
    }
}