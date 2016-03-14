import React from 'react';



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



export default Home;