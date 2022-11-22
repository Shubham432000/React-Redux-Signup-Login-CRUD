import { combineReducers } from "redux";
import account from "./accountReducer";
import formReducer from "./formReducer";
import deparmentReducer from "./deparmentReducer"


const rootReducer = combineReducers({ 
    account,
    formReducer,
    deparmentReducer
})

export default rootReducer;