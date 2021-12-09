import {
     UPDATE_CART,
     CLEAR_CART
} from './../type'


export const updateCart =(item)=>{
        return { type:UPDATE_CART,  payload : item }
}

export const clearCart = ()=>{
        return{ type :CLEAR_CART }
}