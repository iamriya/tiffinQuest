export const getAllVendorReducer = (state = {vendors: []}, action) => {

    switch (action.type) {
        case 'GET_VENDORS_REQUEST': return {
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

export const addPackageReducer = (state = {}, action) => {

    switch (action.type) {
        case 'ADD_PACKAGE_REQUEST': return {
            loading: true, 
            ...state
        }
        case 'ADD_PACKAGE_SUCCESS': return {
            loading: false,
            success: true 
        }
        case 'ADD_PACKAGE_FAILED': return {
            loading: false,
            error: action.payload
        }
        default: return state

    }
}