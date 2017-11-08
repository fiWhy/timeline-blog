import * as React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import { create } from "react-test-renderer";
import { shallow, configure, render } from "enzyme";
const Adapter = require("enzyme-adapter-react-16");
import "jest";
import Dashboard from "./";

describe("Dashboard Component", () => {
    configure({ adapter: new Adapter() });
    const store = configureStore()();
    const dashboard = shallow(<MemoryRouter><Dashboard/></MemoryRouter>).dive();
    it("renders", () => {
        expect(dashboard).toMatchSnapshot();
    })
})