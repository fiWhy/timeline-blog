import { DataAction } from "../actions/data.action";
import { createReducer } from "redux-act";

const defaultState = {};

const reducer = createReducer({}, defaultState);
reducer.on(DataAction, state => state);
export const DataReducer = reducer;
