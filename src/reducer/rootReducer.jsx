import { combineReducers } from "redux";
import account from "./accountReducer";
import formReducer from "./formReducer";


const rootReducer = combineReducers({ 
    account,
    formReducer
})

export default rootReducer;