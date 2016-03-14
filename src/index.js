require("bootstrap-webpack");

import React from 'react'
import { render } from 'react-dom'
import { browserHistory, IndexRoute, Router, Route, Link } from 'react-router'
import Apis from './Apis';
import Header from './partials/header';
import Footer from './partials/footer';











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







var Home = React.createClass({
  generateLorem: function(){
    return (
      <div className="col-sm-6">
        <h2>Heading</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
        <p><a href="#" role="button" className="btn btn-default">View details »</a></p>
      </div>
    );
  },
  render: function() {
    return (
      <div>
        <h1>Hackathon Starter</h1>
        <p className="lead">A boilerplate for Node.js web applications.</p>
        <hr />
        <div className="row">
          {this.generateLorem()}
          {this.generateLorem()}
          {this.generateLorem()}
          {this.generateLorem()}
        </div>
      </div>
    );
  }
});







render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="api" component={Apis} />
    </Route>
  </Router>
), document.getElementById('root'))