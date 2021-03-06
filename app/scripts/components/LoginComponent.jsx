//3rd party
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

var LoginPageComponent = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div id="login-page" className="col xs12 col s8 offset-s2">
          <div className="card-panel z-index-6 card-info teal lighten-5">
            <form onSubmit={this.props.handleLogin} className="login-form row">
              <div className="input-field col s12">
                <input id="username" type="text" className="validate" />
                <label htmlFor="username">Username</label>
              </div>

              <div className="input-field col s12">
                <input id="password" type="password" className="validate" />
                <label htmlFor="password">Password</label>
              </div>

              <div className="input-field col s12 center-align">
                <button className="btn waves-effect waves-light login" type="submit">Login
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LoginPageComponent;
