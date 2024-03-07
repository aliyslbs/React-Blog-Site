import { combineReducers } from "redux";
import authReducer from "./reducers/auhtReducer";
import userReducer from "./reducers/userReducer";
import superUserAuthReducer from "./reducers/superUserAuthReducer";

const rootReducer = combineReducers({
    auth : authReducer,
    user : userReducer,
    superUserAuth : superUserAuthReducer
})

export default rootReducer