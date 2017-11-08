import * as React from "react";
import { TimelineContainer, TimelineGridContainer } from "../styled/timeline-container";
import { Grid } from "semantic-ui-react";

const Timeline = ({ children }) => (
    <TimelineGridContainer>
        <TimelineContainer>
            {children}
        </TimelineContainer>
    </TimelineGridContainer>
);

export default Timeline;