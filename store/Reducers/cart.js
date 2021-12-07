

import { 
        UPDATE_CART 
    } from './../type'

const initialState = {
    cart:[ ]
}

export default cartReducer =(state=initialState, action )=>{
    switch (action.type) {
        case UPDATE_CART:

            return {...state , cart:action.payload }
            break;
    
        default:
            return state;
            break;
    }
}