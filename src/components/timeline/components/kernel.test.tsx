import * as React from "react";
import { create } from "react-test-renderer";
import "jest";
import Kernel from "./kernel";

describe("Kernel Component", () => {
    const component = create(<Kernel />)
    const tree = component.toJSON();
    it("renders", () => {
        expect(tree).toMatchSnapshot();
    })
})