import { R_SUCCESS,R_FAIL } from "../constants/restConstant";

export const restListReducer =(state={restList:[]},action)=>{
    switch(action.type){
        case R_SUCCESS:
            return {restList:action.payload}
        case R_SUCCESS:
            return {restList:action.error}
        default:
            return state
    }
}