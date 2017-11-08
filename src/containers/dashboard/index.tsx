import * as React from "react";
import { bindActionCreators } from 'redux'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { DataAction } from "./actions/data.action";
import { ArticlesAction } from "./actions/articles.action";
import { Container } from "semantic-ui-react";

import DashboardPresentation from "./components/dashboard";
import { IArticle } from "../../components/timeline";

interface IDashboardProps {
    articles: {
        data?: IArticle[]
    },
    ArticlesAction: Function;
}

class Dashboard extends React.Component<IDashboardProps, any>{
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
            <DashboardPresentation articles={articles ? articles.data : []} />
        </Container>;
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.ArticlesReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ArticlesAction: bindActionCreators(ArticlesAction, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));