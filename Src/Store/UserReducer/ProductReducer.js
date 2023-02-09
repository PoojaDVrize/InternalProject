import {
    USER_PRODUCT_DETAILS_REQUEST,
    USER_PRODUCT_DETAILS_SUCCESS,
    USER_PRODUCT_DETAILS_FAILURE,
    SETFILTEREDDATA
} from "../Actions/Actions";

const productState = {
    isLoading: false,
    productsData: [],
    filteredData: [],
    error: ''
}

const ProductReducer = (state = productState, action) => {
    switch (action.type) {
        case USER_PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case USER_PRODUCT_DETAILS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                productsData: action.payload,
                filteredData: action.payload,
                error: ''
            }
        case USER_PRODUCT_DETAILS_FAILURE:
            return {
                ...state,
                isLoading: false,
                productsData: [],
                filteredData: [],
                error: action.payload
            }
        case SETFILTEREDDATA:
            return {
                ...state,
                filteredData: action.payload
            }
        default:
            return { ...state };
    }
}

export default ProductReducer;