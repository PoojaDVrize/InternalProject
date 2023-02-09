import { AUTHORIZE, DEACTIVATE, GET_ALL, PRODUCT_DETAILS, GET_DATA } from "../Actions/Actions";
const initialState = {
    getAllResponse:[],
    authorizeResponse:[],
    authorizeResponse:[],
    prdouctDetailsResponse:[],
    userProductDetailsResponse:[],
    deactivateResponse:[],
    usersData:[],
}
function AdminReducer(state=initialState, action) {
    switch (action.type) {
        case GET_DATA:
            console.log("in reducer");
            return {...state, usersData:[...state.usersData, action.payload]} ;
        case GET_ALL:
            return {...state, getAllResponse:[action.payload]};
        case AUTHORIZE:
            return {...state, authorizeResponse:[action.payload]};
        case PRODUCT_DETAILS:
            return {...state, prdouctDetailsResponse:[action.payload]};
        case DEACTIVATE:
            return {...state, deactivateResponse:[action.payload]};
        default:
            return {...state};
        
    }
}
export default AdminReducer;