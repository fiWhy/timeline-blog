import * as React from "react";
import { bindActionCreators } from 'redux'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { DataAction } from "./actions/data.action";
import { ArticlesAction } from "./actions/articles.action";
import { Container } from "semantic-ui-react";

import DashboardPresentation from "./components/dashboard";

class Dashboard extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        const { ArticlesAction } = this.props;
        ArticlesAction();
    }

    render() {
        const { articles } = this.props;
        return <Container>
            <DashboardPresentation articles={articles.data} />
        </Container>;
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.DashboardDataReducer,
        articles: state.ArticlesReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        DataAction: bindActionCreators(DataAction, dispatch),
        ArticlesAction: bindActionCreators(ArticlesAction, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));