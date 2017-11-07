import * as React from "react";
import { create } from "react-test-renderer";
import "jest";
import Timeline from "./timeline";

describe("Timeline Component", () => {
    const component = create(<Timeline>test</Timeline>)
    const tree = component.toJSON();
    it("renders", () => {
        expect(tree).toMatchSnapshot();
    })
})