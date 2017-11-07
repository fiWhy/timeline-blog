import * as React from "react";
import { create } from "react-test-renderer";
import "jest";
import CardBody from "./card-body";

describe("CardBody Component", () => {
    const component = create(<CardBody>test</CardBody>)
    const tree = component.toJSON();
    it("renders", () => {
        expect(tree).toMatchSnapshot();
    })
})