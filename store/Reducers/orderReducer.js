
import { ADD_ORDER } from './../type'

const initialState = {
    orders:[]
}

export default orderReducer=(state=initialState , action )=>{
        switch (action.type) {
            case ADD_ORDER:
                return { ...state , orders :[action.payload  ,...state.orders ]}
                break;
        
            default:
                return state
                break;
        }
}   