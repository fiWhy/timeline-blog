import * as React from "react";
import TimelineSideContainer from "../styled/timeline-side-container";
import { IArticle } from "../";
import { Card } from "./card";
import { GridColumn, SemanticWIDTHSNUMBER } from "semantic-ui-react";

const computer = 7,
    widescreen = 7,
    tablet = 8,
    mobile = 16;

const TimelineSide = ({ articles }) => {
    const cards = articles.map(article => <Card key={article.id} title={article.title}>{article.content}</Card>);
    return <GridColumn computer={computer} tablet={tablet} widescreen={widescreen} mobile={mobile}>
        <TimelineSideContainer>{cards}</TimelineSideContainer>
    </GridColumn>;
};

export default TimelineSide;