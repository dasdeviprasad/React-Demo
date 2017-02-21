// <reference path="react.js" />
ReactDOM.render(
    // Component
    React.createElement("div", {id: 'mydiv'}, 
        React.createElement("span", {className: 'highlight'}, 'I am highlighted.')
    )
    , 
    // Element
    document.querySelector('#container')
);

/*
ReactDOM.render(
    // Component
    <div><span class="highlight"></span></div>
    , 
    // Element
    document.querySelector('#container')
);
*/