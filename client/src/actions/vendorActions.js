import axios from "axios";

export const getAllVendors = () => async dispatch => {
    dispatch({ type: 'GET_VENDOR_REQUEST' });
    try {
        const response = await axios.get('/api/vendors/getallvendors');
        dispatch({ type: 'GET_VENDORS_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_VENDORS_FAILED', payload: error })
    }
};