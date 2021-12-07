import {
     UPDATE_CART
} from './../type'


export const updateCart =(item)=>{
        return { type:UPDATE_CART,  payload : item }
}
