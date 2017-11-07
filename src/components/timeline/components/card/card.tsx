import * as React from "react";
import CardContainer from "./styled/card-container";
import CardHeader from "./components/card-header";
import CardBody from "./components/card-body";

const Card = ({ title, children }) => (
    <CardContainer>
        <CardHeader>{title}</CardHeader>
        <CardBody>{children}</CardBody>
    </CardContainer>
);

export default Card;