// Dependencies
var UserStore   = null;
var UserActions = null;

Dependency.autorun(()=> {
  UserStore   = Dependency.get('UserStore');
  UserActions = Dependency.get('UserActions');
});

LoginButtonComponent = React.createClass({
  loginWithFacebook() {
    UserActions.loginWithFacebook();
  },

  render() {
    return (
      <button onClick={this.loginWithFacebook}>Login with Facebook</button>
    );
  },
});

LogoutButtonComponent = React.createClass({
  logout() {
    UserActions.logout();
  },

  render() {
    return (
      <button onClick={this.logout}>Logout</button>
    );
  },
});

HeaderComponent = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user(),
    };
  },

  render() {
    var loginButton;
    if (!Meteor.loggingIn()) {
      if (Meteor.user()) {
        loginButton = <LogoutButtonComponent />;
      } else {
        loginButton = <LoginButtonComponent />;
      }
    }

    return (
      <div>
        <div>Header</div>
        <div>{loginButton}</div>
      </div>
    );
  },
});