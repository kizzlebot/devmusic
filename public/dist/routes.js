'use strict';

var _reactRouter = require('react-router');

var React = require('react');
var render = require('react-dom').render;


var Header = require('./partials/header');
var Footer = require('./partials/footer');

var Home = require('./routes/home');
var GithubAPI = require('./routes/apis/github');
var LinkedIn = require('./routes/apis/linkedin');
var Contact = require('./routes/contact');
var APIs = require('./routes/apis');
var Login = require('./routes/login');
var SignUp = require('./routes/signup');

var App = React.createClass({
  displayName: 'App',
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Header, { ref: 'header' }),
      React.createElement(
        'div',
        { className: 'container' },
        React.cloneElement(this.props.children, {
          key: this.props.location.pathname
        })
      ),
      React.createElement(Footer, null)
    );
  }
});

module.exports = App;

