import {CUSTOMER_PURCHASE} from '../../common/constants/ActionTypes';
import Immutable from 'immutable';

const initialState={
    message:''
}
export default function purchaseReducer(state=initialState,action){
    console.log("DDDTYE"+ action.type)
    switch (action.type){
        case CUSTOMER_PURCHASE:
            return Object.assign({},...state,{
                        message:action.message
             });       
        default:
            return state;
            
    }
}