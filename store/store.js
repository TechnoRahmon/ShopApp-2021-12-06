import {createStore , combineReducers  } from 'redux'
import cartReducer from './Reducers/cart'
import orderReducer from './Reducers/orderReducer'
import productReducer from './Reducers/productReducer'

const rootReducer = combineReducers({
    cart : cartReducer,
    order:orderReducer,
    product:productReducer,
}); 

export default store = createStore(rootReducer);
