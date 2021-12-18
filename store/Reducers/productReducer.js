import { ADD_PRODUCT , UPDATE_PRODUCT} from './../type'

const initialState = { 
    products : []
};

export default  productReducer = (state=initialState , action )=>{
        
    switch (action.type) {
            case ADD_PRODUCT:
                return { products : [ action.payload ,  ...state.products]}            
                break;

         case UPDATE_PRODUCT:
                let { id , product } = action.payload;
                let newProducts  = state.products;
                console.log('id ' ,id , 'product',product);
                let specificProductIndex = state.products.findIndex(item => item.id === id );
                console.log( 'specificProductIndex :',specificProductIndex);
                newProducts[specificProductIndex] = product ; 
                console.log('new Proudcts : ' ,newProducts );
                return {...state,  products : newProducts }            
                break;

            default:
               return state;
                break;
        }
}