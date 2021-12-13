import { ADD_PRODUCT } from './../type'

export const addNewProduct = (product)=>{
        return ({ type : ADD_PRODUCT , payload :product })
}



