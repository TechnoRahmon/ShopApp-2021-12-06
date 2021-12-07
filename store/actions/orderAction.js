import { ADD_ORDER } from './../type'



export const addOrder=(newOrder)=>{

    return{ type:ADD_ORDER , payload:newOrder }
}
