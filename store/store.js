import {createStore , combineReducers  } from 'redux'
import cartReducer from './Reducers/cart'
import orderReducer from './Reducers/orderReducer'

const rootReducer = combineReducers({
    cart : cartReducer,
    order:orderReducer
}); 

export default store = createStore(rootReducer);
