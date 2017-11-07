import * as React from "react";
import { create } from "react-test-renderer";
import "jest";
import Card from "./card";

describe("Card Component", () => {
    const component = create(<Card title="test">test</Card>)
    const tree = component.toJSON();
    it("renders", () => {
        expect(tree).toMatchSnapshot();
    })
})