//3rd party
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var $ = require('jquery');

//local lifecycle components
var LoginPageComponent = require('./LoginComponent.jsx');
// var MainPageComponent = require('./main.jsx');

var Interface = React.createClass({
  getInitialState: function(){
    return {
      router: this.props.router
    }
  },
  getDefaultProps: function(){
    return {
      BASE_URL: 'http://104.131.203.140:3000/api/tesla/quotes/',
      AUTH_URL: 'http://104.131.203.140:3000/api/authentication'
    }
  },
  componentWillMount: function(){
  this.callback = (function(){
   this.forceUpdate();
  }).bind(this);
  this.state.router.on('route', this.callback);
  },
  componentWillUnmount: function(){
    this.state.router.off('route', this.callback);
  },

  //custom functions
  handleLogin: function(e, log){
    e.preventDefault();
    this.handleAuthentication();
  },
  handleAuthentication: function(){
    var user = $('#username').val();
    var pass = $('#password').val();
    $.post(this.props.AUTH_URL),
    {
      'user': user,
      'pass': pass
    },
    function(result){
      console.log(result);
    }
  },

  render: function(){
    var currentComponent;
    var route = this.state.router;
    if (route.current === 'signInPage') {
      currentComponent = <LoginPageComponent
        handleLogin = {this.handleLogin}
        />
    } else if (route === 'mainPage') {
      currentComponent = <MainPageComponent />
    }
    return (
      <div>
        {currentComponent}
      </div>
    );
  }
});

module.exports = Interface;
