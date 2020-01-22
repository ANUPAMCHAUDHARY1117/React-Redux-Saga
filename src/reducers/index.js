import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import numberReducer from "./numberReducer";

const rootReducer = combineReducers({ counterReducer, numberReducer });

export default rootReducer;
