import * as React from "react";
import { create } from "react-test-renderer";
import "jest";
import Dashboard from "./dashboard";

describe("Dashboard Component", () => {
    const component = create(<Dashboard articles={[]}/>);
    const tree = component.toJSON();
    it("renders", () => {
        expect(tree).toMatchSnapshot();
    })
})