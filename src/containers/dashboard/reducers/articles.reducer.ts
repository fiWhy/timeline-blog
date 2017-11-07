import { ArticlesAction } from "../actions/articles.action";
import { createReducerAsync } from "redux-act-async";

 const defaultState = {
    loading: false,
    request: null,
    data: [],
    error: null
}

export const ArticlesReducer = createReducerAsync(ArticlesAction, defaultState);
