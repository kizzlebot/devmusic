import React from 'react'


var SignUp = React.createClass({
  render: function() {
    return (
      <div>
        <div className="page-header">
          <h3>Sign up</h3>
        </div>
        <form id="signup-form" method="POST" className="form-horizontal">
          <input type="hidden" name="_csrf" />
          <div className="form-group">
            <label htmlFor="email" className="col-sm-3 control-label">Email</label>
            <div className="col-sm-7">
              <input type="email" name="email" id="email" placeholder="Email" autofocus="autofocus" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="col-sm-3 control-label">Password</label>
            <div className="col-sm-7">
              <input type="password" name="password" id="password" placeholder="Password" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" className="col-sm-3 control-label">Confirm Password</label>
            <div className="col-sm-7">
              <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-7">
              <button type="submit" className="btn btn-success"><i className="fa fa-user-plus" />Signup</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

export default SignUp;