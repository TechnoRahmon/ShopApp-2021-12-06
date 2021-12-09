

import { 
        UPDATE_CART,
        CLEAR_CART
    } from './../type'

const initialState = {
    cart:[ ]
}

export default cartReducer =(state=initialState, action )=>{
    switch (action.type) {
        case UPDATE_CART:

            return {...state , cart:action.payload }
            break;
        case CLEAR_CART:

            return {...state , cart:[] }
            break;
        default:
            return state;
            break;
    }
}