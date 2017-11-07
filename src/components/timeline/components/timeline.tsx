import * as React from "react";
import TimelineContainer from "../styled/timeline-container";
import { Grid } from "semantic-ui-react";

const Timeline = ({ children }) => (
    <Grid>
        <TimelineContainer>
            {children}
        </TimelineContainer>
    </Grid>
);

export default Timeline;