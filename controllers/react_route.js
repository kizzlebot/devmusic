var React = require('react');
var ReactDOMServer = require('react-dom/server');
var DOM = React.DOM;
var body = DOM.body;
var div = DOM.div;
var script = DOM.script;




// var App = React.createFactory(require('../src/routes.js'));
// var routes = require('../src/routes.js')


exports.index = function(req, res) {
	var initialState = {
		items: [
		  'document your code',
		  'drop the kids off at the pool',
		  '</script><script>alert(666)</script>'
		],
		text: ''
	};
	res.render('routes', { data: initialState });
};