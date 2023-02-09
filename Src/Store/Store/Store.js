import {combineReducers, applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import UserReducer from '../UserReducer/UserReducer'
import AdminReducer from '../AdminReducer/AdminReducer';
import ProductReducer from '../UserReducer/ProductReducer';
const rootReducer = combineReducers({UserReducer, AdminReducer,ProductReducer});
export const Store = createStore(rootReducer, applyMiddleware(thunk));
