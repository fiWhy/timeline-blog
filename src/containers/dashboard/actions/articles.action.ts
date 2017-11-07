import { createActionAsync } from "redux-act-async";
import articles from "../mocks/articles";

export const ArticlesAction = createActionAsync("ArticlesAction", () =>{
    return Promise.resolve(articles);
});