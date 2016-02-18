import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Login from './login';
import Template from './template';

export default class MainRouter extends React.Component {
    
    render() {
       const rootPath = `${mainPath}/index.html`;
       
       return (
            <Router history={browserHistory}>
                <Route path={rootPath} component={Template}>
                    <IndexRoute component={Login} />
                </Route>
            </Router>  
       );
    }
}