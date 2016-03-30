
var React = require('react');
var ReactDOM = require('react-dom/server');
var DOM = React.DOM;
var body = DOM.body, div = DOM.div, script = DOM.script;
// var App = React.createFactory(require('./src/routes.js'));

var props = {
  name:'james'
};


'use strict';


var App = React.createClass({
  displayName: 'App',
  render: function render() {
    return React.createElement(
      'div',
      null,
      'Hello world'
    );
  }
});




var html = createMarkup(App);


function createMarkup(component) {
  return ReactDOM.renderToString(React.createElement(App(props)));
}





module.export = html;