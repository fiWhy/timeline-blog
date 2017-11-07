import * as React from "react";
import { create } from "react-test-renderer";
import "jest";
import TimelineSide from "./timeline-side";

describe("TimelineSide Component", () => {
    const component = create(<TimelineSide articles={null}></TimelineSide>)
    const tree = component.toJSON();
    it("renders", () => {
        expect(tree).toMatchSnapshot();
    })
})