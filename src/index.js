// require("bootstrap-webpack!./style/css/themes/default/_variables.less");
// require("font-awesome-webpack");
// require("bootstrap-webpack");

// require('./style/css/main.scss');

import React from 'react'
import { render } from 'react-dom'
import { browserHistory, IndexRoute, Router, Route, Link } from 'react-router'



import Header from './partials/header';
import Footer from './partials/footer';



import Home from './components/home';
import Contact from './components/contact';
import APIs from './components/apis';







var App = React.createClass({
  render: function(){
    return (
      <div>
        <Header ref={'header'} />
        <div className={'container'}>
         {React.cloneElement(this.props.children, {
           key: this.props.location.pathname
         })}
        </div>
        <Footer/>
      </div>
    );
  }
})











render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="api" component={APIs} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
), document.getElementById('root'))