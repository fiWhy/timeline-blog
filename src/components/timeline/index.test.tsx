import * as React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { create } from "react-test-renderer";
import "jest";
import Timeline from "./";

describe("Timeline Component", () => {
    const store = configureStore()();
    const component = create(<Provider store={store}><Timeline articles={[]}/></Provider>)
    const tree = component.toJSON();
    it("renders", () => {
        expect(tree).toMatchSnapshot();
    })
})