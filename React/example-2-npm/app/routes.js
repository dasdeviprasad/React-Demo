import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from './components/main';
import Page1 from './components/page1';
import UserDetail from './components/user-detail';

export default (<Router history={hashHistory}>
    <Route path="/" component={Main}>
        <IndexRoute component={Page1} />
        <Route path="user/:userName" component={UserDetail} />
    </Route>
</Router>);