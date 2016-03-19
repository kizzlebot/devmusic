// require("bootstrap-webpack!./style/css/themes/default/_variables.less");
require("font-awesome-webpack");
require("bootstrap-webpack");

require('./style/css/main.scss');

import React from 'react'
import { render } from 'react-dom'
import { browserHistory, IndexRoute, Router, Route, Link } from 'react-router'



import Header from './partials/header';
import Footer from './partials/footer';



import Home from './routes/home';
// import GithubAPI from './routes/apis/github';
import Contact from './routes/contact';
import APIs from './routes/apis';
import Login from './routes/login';
import SignUp from './routes/signup';






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




var GithubAPI = React.createClass({
  render() {
    return (
      <div>
        <h2><i className="fa fa-github" />GitHub API</h2>
        <div className="btn-group btn-group-justified"><a href="http://developer.github.com/guides/getting-started/" target="_blank" className="btn btn-primary"><i className="fa fa-check-square-o" />Getting Started</a><a href="https://apigee.com/console/github" target="_blank" className="btn btn-primary"><i className="fa fa-laptop" />API Console</a><a href="http://developer.github.com/v3/" target="_blank" className="btn btn-primary"><i className="fa fa-file-text-o" />Documentation</a></div><br />
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Repository Information</h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-xs-4"><img src="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png" className="img-rounded img-responsive" /></div>
              <div className="col-xs-8">

                <h4></h4>
                <ul className="list-inline">
                  <li><i className="fa fa-eye-slash" /></li>
                  <li><i className="fa fa-star" /></li>
                  <li><i className="fa fa-code-fork" /></li>
                  <li><i className="fa fa-code" /></li>
                </ul><strong>DESCRIPTION</strong>
                {/* p= repo.description*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});








render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/api(/:apiName)" component={APIs}>
      </Route>
        <Route path='/github' component={GithubAPI}/>
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <IndexRoute component={Home}/>
    </Route>
  </Router>
), document.getElementById('root'))