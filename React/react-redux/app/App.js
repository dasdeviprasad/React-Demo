import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/index';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>, 
    document.getElementById('container')
);

