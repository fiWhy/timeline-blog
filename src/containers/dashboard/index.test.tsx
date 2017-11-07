import * as React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import { create } from "react-test-renderer";
import "jest";
import Dashboard from "./";

describe("Dashboard Component", () => {
    const store = configureStore()();
    const component = create(<Provider store={store}><MemoryRouter><Dashboard/></MemoryRouter></Provider>)
    const tree = component.toJSON();
    it("renders", () => {
        expect(tree).toMatchSnapshot();
    })
})