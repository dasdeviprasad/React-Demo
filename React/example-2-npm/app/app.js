import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';

var page = {
    title: 'User List'
}
ReactDOM.render(
    <div>{routes}</div>,
    document.querySelector('#container')
);