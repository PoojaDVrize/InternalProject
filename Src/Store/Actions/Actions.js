import axios from "axios";

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const GET_ALL = 'GET_ALL';
export const AUTHORIZE = 'AUTHORIZE';
export const PRODUCT_DETAILS = 'PRODUCT_DETAILS';
export const DEACTIVATE = 'DEACTIVATE';
export const USER_DETAILS = 'USER_DETAILS';
export const USER_PRODUCT_DETAILS_REQUEST = 'USER_PRODUCT_DETAILS_REQUEST';
export const USER_PRODUCT_DETAILS_SUCCESS = 'USER_PRODUCT_DETAILS_SUCCESS';
export const USER_PRODUCT_DETAILS_FAILURE = 'USER_PRODUCT_DETAILS_FAILURE';
export const SETFILTEREDDATA = 'SETFILTEREDDATA';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const RESET_PASSWORD = 'RESET_PASSWORD';

export const GET_DATA = 'GET_DATA';

const url = 'https://'


export const GetData = () => async (dispatch) => {
    try {
        const result = await axios({
            method: 'get',
            url: 'https://mocki.io/v1/b807abb0-f4da-4bc6-94dc-de214bcbff90',
        });
        console.log("in Actions");
        dispatch({ type: GET_DATA, payload: result.data });
    } catch (error) {
        console.log(error);
    }
};

export const RegisterUser = data => async (dispatch) => {
    try {
        const result = await axios({
            method: 'post',
            url: `${url}/users/register`,
            data: data,
        });
        dispatch({ type: REGISTER_USER, payload: result.data });
    } catch (error) {
        console.log(error);
    }
};

export const LoginUser = data => async (dispatch) => {
    try {
        const result = await axios({
            method: 'post',
            url: `${url}/users/authenticate`,
            data: data,
        });
        dispatch({ type: LOGIN_USER, payload: result.data });
    } catch (error) {
        console.log(error);
    }
};

export const UserDetails = data => async (dispatch) => {
    try {
        const result = await axios({
            method: 'get',
            url: `${url}/users/user/${data.userId}`,
            data: data,
            headers: {

            }
        });
        dispatch({ type: USER_DETAILS, payload: result.data });
    } catch (error) {
        console.log(error);
    }
};

export const GetAll = data => async (dispatch) => {
    try {
        const result = await axios({
            method: 'post',
            url: `${url}/users/search`,
            data: data,
            headers: {

            }
        });
        dispatch({ type: GET_ALL, payload: result.data });
    } catch (error) {
        console.log(error);
    }
}

export const Authorize = data => async (dispatch) => {
    try {
        const result = await axios({
            method: 'put',
            url: `${url}/users/userId/${data.userId}/authorize`,
            data: data,
            headers: {

            }
        });
        dispatch({ type: AUTHORIZE, payload: result.data });
    } catch (error) {
        console.log(error);
    }
}

export const ProductDetails = data => async (dispatch) => {
    try {
        const result = await axios({
            method: 'get',
            url: `${url}/inventory/default/products`,
            data: data,
        });
        dispatch({ type: PRODUCT_DETAILS, payload: result.data });
    } catch (error) {
        console.log(error);
    }
}

// export const UserProductDetails = data => async (dispatch) => {
//     try {
//         const result = await axios({
//             method: 'get',
//             url: `${url}/users/user/${data.userId}/products`,
//             data: data,
//             headers: {

//             }
//         });
//         dispatch({ type: USER_PRODUCT_DETAILS, payload: result.data });
//     } catch (error) {
//         console.log(error);
//     }
// }

// 7. get user product details
// URL: GET /users/user/{userId}/products
export const UserProductDetails = () => async (dispatch) => {
    dispatch({ type: USER_PRODUCT_DETAILS_REQUEST });
    try {
        const result = await axios({
            method: 'get',
            url: 'https://mocki.io/v1/c67d166a-e1c5-4064-9638-0c1b3a3295d9',
        });
        dispatch({ type: USER_PRODUCT_DETAILS_SUCCESS, payload: result.data.products });
    } catch (error) {
        dispatch({ type: USER_PRODUCT_DETAILS_FAILURE, payload: error.message });
    }
}

export const setFilteredData = data => {
    return {
        type: SETFILTEREDDATA,
        payload: data
    }
}


export const ForgotPassword = data => async (dispatch) => {
    try {
        const result = await axios({
            method: 'put',
            url: `${url}/users/userId/${data.userId}/forgotpassword`,
            data: data,
        });
        dispatch({ type: FORGOT_PASSWORD, payload: result.data });
    } catch (error) {
        console.log(error);
    }
}

export const ResetPassword = data => async (dispatch) => {
    try {
        const result = await axios({
            method: 'put',
            url: `${url}/users/userId/${data.userId}/resetpassword`,
            data: data,
        });
        dispatch({ type: RESET_PASSWORD, payload: result.data });
    } catch (error) {
        console.log(error);
    }
}


export const Deactivate = data => async (dispatch) => {
    try {
        const result = await axios({
            method: 'put',
            url: `${url}/users/userId/${data.userId}/deactivate`,
            data: data,
            headers: {

            }
        });
        dispatch({ type: DEACTIVATE, payload: result.data });
    } catch (error) {
        console.log(error);
    }
}


