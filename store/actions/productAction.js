import { ADD_PRODUCT , UPDATE_PRODUCT , DELETE_PRODUCT} from './../type'

export const addNewProduct = (product)=>{
        return ({ type : ADD_PRODUCT , payload :product })
}

export const updateProduct = (id , product)=>{
        return ({ type : UPDATE_PRODUCT , payload :{id , product } })
}

export const deleteProduct = (id )=>{
        return ({ type : DELETE_PRODUCT , payload : id })
}