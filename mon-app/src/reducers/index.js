import { combineReducers, createStore } from "redux";
import { loader } from "./loader";

const mainReducer = combineReducers({ loader });
export const store = createStore(mainReducer);
