import { combineReducers } from "redux";
import account from "./AccountReducer";
import formReducer from "./FormReducer";
import deparmentReducer from "./DeparmentReducer"
import Account2Reducer from "./Account2Reducer"


const rootReducer = combineReducers({ 
    account,
    formReducer,
    deparmentReducer,
    Account2Reducer
})

export default rootReducer;