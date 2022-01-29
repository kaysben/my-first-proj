import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";
import Reducer from "./reducer";
const rootreducer = combineReducers({ Reducer, MovieReducer });
export default rootreducer;
