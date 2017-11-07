import * as React from "react";
import { bindActionCreators } from 'redux'

import TimelinePresentation from "./components/timeline";
import TimelineSide from "./components/timeline-side";
import Kernel from "./components/kernel";
import { Card, CardBody, CardHeader } from "./components/card";

export interface IArticle {
    id: number;
    title: string;
    content: string;
}

interface ITimelineProps {
    articles: IArticle[];
}

class Timeline extends React.Component<ITimelineProps, any>{
    static Card = Card;
    static CardBody = CardBody;
    static CardHeader = CardHeader;

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
    }

    partArticles(articles: IArticle[]): { leftSideArticles: IArticle[], rightSideArticles: IArticle[] } {
        const half = articles.length > 1 ? articles.length / 2 : articles.length;
        return {
            leftSideArticles: articles.slice(0, half),
            rightSideArticles: articles.slice(half)
        };
    }

    render() {
        const { leftSideArticles, rightSideArticles } = this.partArticles(this.props.articles);
        return <TimelinePresentation>
            <TimelineSide articles={leftSideArticles} />
            <Kernel />
            <TimelineSide articles={rightSideArticles} />
        </TimelinePresentation>;
    }
}


export default Timeline;