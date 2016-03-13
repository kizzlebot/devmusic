var React = require('react');
var ReactDOM = require('react-dom');




var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>{this.props.heading || 'Hi, world!'}</h1>
        <p>{this.props.caption || 'captions are amazing too'}</p>
        <p><a className="btn btn-success btn-lg" href="#" role="button">Learn more</a></p>
      </div>
    );
  }
});



ReactDOM.render(<Home/>, document.getElementById('root'));