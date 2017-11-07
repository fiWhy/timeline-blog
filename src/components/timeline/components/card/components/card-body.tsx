import * as React from "react";
import CardBodyContainer from "../styled/card-body-container";

const CardBody = ({ children }) => (
    <CardBodyContainer>{children}</CardBodyContainer>
);

export default CardBody;