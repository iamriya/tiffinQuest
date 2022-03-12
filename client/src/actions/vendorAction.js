import axios from "axios";

export const getAllVendors = () => async dispatch => {
    dispatch({ type: 'GET_VENDORS_REQUEST' });
    try {
        const response = await axios.get('/api/vendors/getallvendors');
        dispatch({ type: 'GET_VENDORS_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_VENDORS_FAILED', payload: error })
    }
};

export const addPackage = (addpackage) => async dispatch => {
    dispatch({type: 'ADD_PACKAGE_REQUEST'})
    try{
        const response = await axios.post('/api/vendors/addpackage', {addpackage})
        dispatch({type: 'ADD_PACKAGE_SUCCESS'})
        console.log(response)
    }   
    catch (error) {
        dispatch({ type: 'ADD_PACKAGE_FAILED', payload: error })
    }
}