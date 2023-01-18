import axios from "axios";
import { R_FAIL, R_SUCCESS } from "../constants/restConstant";


// define the logic for updating state for a particular component
export const RestList =()=>async (dispatch)=>{
    try{

        const {data}=  await axios.get('/db.json')
        console.log(data);
        dispatch({
          type:'SUCCESS',
          payload:data.restaurants
        })

    }

    catch(error){
        dispatch({
            type:'FAIL',
            error:error
        })
    }

}