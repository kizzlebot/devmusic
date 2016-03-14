import React from 'react';
import {Link} from 'react-router';


var Header = React.createClass({
  render: function() {
    return (
      <div className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" data-toggle="collapse" data-target=".navbar-collapse" className="navbar-toggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
            </button><Link to="/" className="navbar-brand"><i className="fa fa-cube" />DevMusic</Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="api">API Examples</Link></li>
              <li><Link to="contact">Contact</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="login">Login</Link></li>
              <li><Link to="signup">Create Account</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});


export default Header;