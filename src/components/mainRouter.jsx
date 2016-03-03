import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Login from './login';
import Template from './template';
import { Provider } from 'react-redux';
import store from '../reducers/store';

export default class MainRouter extends React.Component {

    render() {
       const rootPath = `${mainPath}/index.html`;

       return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path={rootPath} component={Template}>
                        <IndexRoute component={Login} />
                    </Route>
                </Router>
            </Provider>
       );
    }
}
