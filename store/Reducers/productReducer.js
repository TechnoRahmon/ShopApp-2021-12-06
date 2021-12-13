import { ADD_PRODUCT} from './../type'

const initialState = { 
    products : []
};

export default  productReducer = (state=initialState , action )=>{
        
    switch (action.type) {
            case ADD_PRODUCT:
                return { products : [ action.payload ,  ...state.products]}            
                break;
        
            default:
               return state;
                break;
        }
}