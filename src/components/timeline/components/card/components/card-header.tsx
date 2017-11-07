import * as React from "react";
import CardHeaderContainer from "../styled/card-header-container";

const CardHeader = ({ children }) => (
    <CardHeaderContainer>{children}</CardHeaderContainer>
);

export default CardHeader;