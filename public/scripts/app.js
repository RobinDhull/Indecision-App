'use strict';

// JSX - JavaScript XML
var template = React.createElement(
  'h1',
  null,
  ' Does this change'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);