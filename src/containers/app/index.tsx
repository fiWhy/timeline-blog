import * as React from 'react';
import { AppService } from "./services/app.service";
import AppContainer from "./styled/app";

export default class App extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    componentDidMount() { }

    render() {
        return <AppContainer>{this.props.children}</AppContainer>;
    }
}