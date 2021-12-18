import { ADD_PRODUCT , UPDATE_PRODUCT , DELETE_PRODUCT} from './../type'
import { PRODUCTS } from './../../data/dummy_data'

const initialState = { 
    products : PRODUCTS
};

export default  productReducer = (state=initialState , action )=>{
        
    switch (action.type) {
            case ADD_PRODUCT:
                return { products : [ action.payload ,  ...state.products]}            
                break;

         case UPDATE_PRODUCT:
                let { id , product } = action.payload;
                let newProducts  = state.products;
                let specificProductIndex = state.products.findIndex(item => item.id === id );
                newProducts[specificProductIndex] = product ; 
                return {...state,  products : newProducts }            
                break;
        
        case DELETE_PRODUCT:
            let newProductsAferDeleting =state.products.filter(item=> item.id !== action.payload );
            return{ ...state  ,products: newProductsAferDeleting  }
            break;

            default:
               return state;
                break;
        }
}