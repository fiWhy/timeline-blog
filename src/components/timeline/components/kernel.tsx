import * as React from "react";
import KernelContainer from "../styled/kernel-container";
import { GridColumn } from "semantic-ui-react";

const computer = 2,
    widescreen = 2,
    tablet = 6,
    mobile = 1;

const Kernel = () => (
    <GridColumn computer={computer} tablet={tablet} widescreen={widescreen} mobile={mobile}>
        <KernelContainer></KernelContainer>
    </GridColumn>
);

export default Kernel;