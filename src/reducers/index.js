import hobbyReducer from "./hobby";
import userReducer from "./user";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    hobby: hobbyReducer,
    use: userReducer,
});

export default rootReducer;