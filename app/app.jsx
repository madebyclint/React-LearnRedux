var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load Foundation
$(document).foundation();

// App CSS
// Fix required http://stackoverflow.com/questions/40201262/webpack-css-syntaxerror-unexpected-token
require('applicationStyles')

ReactDOM.render(
    <p>React Boilerplate 3 Project</p>,
    document.getElementById('app')
);

require('./redux-example.jsx')
