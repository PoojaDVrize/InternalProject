import {
    REGISTER_USER,
    LOGIN_USER,
    USER_DETAILS,
    FORGOT_PASSWORD,
    RESET_PASSWORD,
} from "../Actions/Actions";

const initialState = {
    registerUserResponse: [],
    loginUserResponse: [],
    userDetailsResponse: [],
    forgotPasswordResponse: [],
    resetPasswordResponse: [],
}

function UserReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, registerUserRespons: [action.payload] };
        case LOGIN_USER:
            return { ...state, loginUserResponse: [action.payload] };
        case USER_DETAILS:
            return { ...state, userDetailsResponse: [action.payload] }
        case FORGOT_PASSWORD:
            return { ...state, forgotPasswordResponse: [action.payload] };
        case RESET_PASSWORD:
            return { ...state, resetPasswordResponse: [action.payload] };
        default:
            return { ...state };
    }
}
export default UserReducer;