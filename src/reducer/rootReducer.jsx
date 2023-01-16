import { combineReducers } from "redux";
import account from "./AccountReducer";
import EmployeeReducer from "./EmployeeReducer";
import deparmentReducer from "./DeparmentReducer"
import Account2Reducer from "./Account2Reducer"


const rootReducer = combineReducers({ 
    account,
    EmployeeReducer,
    deparmentReducer,
    Account2Reducer
})

export default rootReducer;