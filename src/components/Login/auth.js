import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Login from "./login";

export default class Auth extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth() {
    this.props.handleSuccessfulLogin()
    this.props.history.push("/")
  }

  handleUnsuccessfulAuth() {
    this.props.handleUnsuccessfulLogin();
  }

  render() {
    return (
      (this.props.loggedInStatus === "NOT_LOGGED_IN" ? 
      <div className='auth-login'>
        <Login
          handleSuccessfulAuth={this.handleSuccessfulAuth}
          handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
        />
      </div>
    : <Redirect to='/' />))
  }
}
