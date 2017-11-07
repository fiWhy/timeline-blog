import * as React from "react";
import Timeline from "../../../components/timeline";

const Dashboard = ({ articles }) => {
    return <Timeline articles={articles} />;
};

export default Dashboard;