import * as React from "react";
import { create } from "react-test-renderer";
import "jest";
import CardHeader from "./card-header";

describe("CardHeader Component", () => {
    const component = create(<CardHeader>test</CardHeader>)
    const tree = component.toJSON();
    it("renders", () => {
        expect(tree).toMatchSnapshot();
    })
})