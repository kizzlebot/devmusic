import * as ReactRouter from "react-router";
import { createMemoryHistory, useQueries } from 'history';
/**
 * Module dependencies.
 */
var pkg = require('./package.json');
var express = require('express');
var cookieParser = require('cookie-parser');
var compress = require('compression');
var session = require('express-session');
var bodyParser = require('body-parser');
var logger = require('morgan');
var errorHandler = require('errorhandler');
var lusca = require('lusca');
var methodOverride = require('method-override');
var dotenv = require('dotenv');
var MongoStore = require('connect-mongo/es5')(session);
var flash = require('express-flash');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var expressValidator = require('express-validator');
var sass = require('node-sass-middleware');
var multer = require('multer');
var upload = multer({ dest: path.join(__dirname, 'uploads') });

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 *
 * Default path: .env (You can remove the path argument entirely, after renaming `.env.example` to `.env`)
 */
dotenv.load();


/**
 * API keys and Passport configuration.
 */
var passportConfig = require('./config/passport');

/**
 * Create Express server.
 */
var app = express();

/**
 * Connect to MongoDB.
 */
mongoose.connect(process.env.MONGODB || process.env.MONGOLAB_URI);
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});






/**
 * If Development environment then use webpack middleware
 */
if (app.get('env') == 'development'){
  var config = require('./webpack.config.dev');
  var webpack = require('webpack');

  var compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}








var React = require('react');
var ReactDOMServer = require('react-dom/server');

var DOM = React.DOM;
var body = DOM.body, div = DOM.div, script = DOM.script;
var createRoutes = require('./src/routes.js');





var homeController;
var userController;
var apiController;
var contactController;

var middlewareConfig = require('./config/middleware.js');

middlewareConfig(app, __dirname, () => {


  /**
   * Controllers (route handlers).
   */
  homeController = require('./controllers/home');
  userController = require('./controllers/user');
  apiController = require('./controllers/api');
  contactController = require('./controllers/contact');




  app.post('/login', userController.postLogin);
  app.post('/forgot', userController.postForgot);
  app.post('/reset/:token', userController.postReset);
  app.post('/signup', userController.postSignup);
  app.post('/contact', contactController.postContact);
  app.post('/account/profile', passportConfig.isAuthenticated, userController.postUpdateProfile);
  app.post('/account/password', passportConfig.isAuthenticated, userController.postUpdatePassword);
  app.post('/account/delete', passportConfig.isAuthenticated, userController.postDeleteAccount);
  app.get('/account/unlink/:provider', passportConfig.isAuthenticated, userController.getOauthUnlink);










  /**
   * OAuth authentication routes. (Sign in)
   */
  app.get('/auth/instagram', passport.authenticate('instagram'));
  app.get('/auth/instagram/callback', passport.authenticate('instagram', { failureRedirect: '/login' }), function(req, res) {
    res.redirect(req.session.returnTo || '/');
  });
  app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'user_location'] }));
  app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), function(req, res) {
    res.redirect(req.session.returnTo || '/');
  });


  app.get('/auth/github', passport.authenticate('github'));
  app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), function(req, res) {
    res.redirect(req.session.returnTo || '/');
  });
  app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
  app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function(req, res) {
    res.redirect(req.session.returnTo || '/');
  });
  app.get('/auth/twitter', passport.authenticate('twitter'));
  app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), function(req, res) {
    res.redirect(req.session.returnTo || '/');
  });
  app.get('/auth/linkedin', passport.authenticate('linkedin', { state: 'SOME STATE' }));
  app.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }), function(req, res) {
    res.redirect(req.session.returnTo || '/');
  });




  /**
   * OAuth authorization routes. (API examples)
   */
  app.get('/auth/foursquare', passport.authorize('foursquare'));
  app.get('/auth/foursquare/callback', passport.authorize('foursquare', { failureRedirect: '/api' }), function(req, res) {
    res.redirect('/api/foursquare');
  });
  app.get('/auth/tumblr', passport.authorize('tumblr'));
  app.get('/auth/tumblr/callback', passport.authorize('tumblr', { failureRedirect: '/api' }), function(req, res) {
    res.redirect('/api/tumblr');
  });
  app.get('/auth/venmo', passport.authorize('venmo', { scope: 'make_payments access_profile access_balance access_email access_phone' }));
  app.get('/auth/venmo/callback', passport.authorize('venmo', { failureRedirect: '/api' }), function(req, res) {
    res.redirect('/api/venmo');
  });
  app.get('/auth/steam', passport.authorize('openid', { state: 'SOME STATE' }));
  app.get('/auth/steam/callback', passport.authorize('openid', { failureRedirect: '/login' }), function(req, res) {
    res.redirect(req.session.returnTo || '/');
  });
  app.get('/auth/pinterest', passport.authorize('pinterest', { scope: 'read_public write_public' }));
  app.get('/auth/pinterest/callback', passport.authorize('pinterest', { failureRedirect: '/login' }), function(req, res) {
    res.redirect('/api/pinterest');
  });









  app.use('*', function(req, res, next){
    var history = useQueries(createMemoryHistory)();
    var routes = createRoutes(history);
    var location = req.path ;


    ReactRouter.match({routes, location}, (error, redirectLocation, renderProps) => {
      if (error || !renderProps) {
        console.error(`if (error || !renderProps)`);
        return next(error);
      }

      if (redirectLocation) {
        console.error('redirectLocation hit');
        return res.redirect(redirectLocation.pathname + redirectLocation.search);
      }



      var reactContent = ReactDOMServer.renderToString(React.createElement(ReactRouter.RouterContext, {...renderProps, csrf:res.locals._csrf}))
      var style = '/css/main.css';
      var page = React.createElement('html', null,
        React.createElement('head', null, React.createElement('link', { type: 'text/css', rel:'stylesheet', href: style })),
        React.createElement('body', null,
          React.createElement('div', {
            id: 'react-root',
            dangerouslySetInnerHTML: {__html:reactContent}
          })
        ),
        React.createElement('script', {src:'/dist/bundle.js'}),
      );




      res.header("Content-Type", "text/html");
      var html = ReactDOMServer.renderToStaticMarkup(page);
      res.send(html);
    });
  })
});




/**
 * Error Handler.
 */
app.use(errorHandler());





// If called directly
if(require.main === module) {
  app.listen(app.get('port'), function() {
    console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
  });
}
else{
  app.listen = app.listen.bind(app, app.get('port'));
}




module.exports = app;