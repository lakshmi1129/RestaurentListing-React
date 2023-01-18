// to srore updated state
import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restListReducer } from "./reducers/restListReducer";

// to hold updated states-use reducers
const reducers = combineReducers({
    restListReducer:restListReducer

})

const middleware =[thunk]
const store = createStore(reducers,applyMiddleware(...middleware))

export default store
