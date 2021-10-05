import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavigationContainer from "./navigation/navigation-container";
import axios from "axios";

import Dashboard from "./Dashboard/dashboard";
import Deptor from "./debtor/debtor";
import Payments from "./payments/payments";
import DebtorDetail from "./debtor/detor-detail";
import Login from "./Login/login";
import Cookies from "js-cookie";
import Auth from "./Login/auth";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "test",
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN",
    });
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
    });
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
    });
  }

  checkLoginStatus() {
    const token = Cookies.get("token");

    console.log(token);
    axios
      .get(
        "http://localhost:5000/protected",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        { withCredentials: true }
      )

      .then((response) => {
        console.log("this is your response logged " + response.data.logged_in_as);
        if (
          response.data.logged_in_as &&
          this.state.loggedInStatus === "test"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data,
          });
        } else if (
          !response.data.logged_in &
          (this.state.loggedInStatus === "LOGGED_IN")
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {},
          });
        }
        console.log("logged in?", response);
      })
      .catch((error) => {
        console.log(
          "There is something wrong with the get cookie set up with protected",
          error
        );
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    });
  }

  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Deptor
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
              />

              <Route
                path="/auth"
                render={(props) => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                )}
              />

              <Route
                path="/debtor/:slug"
                render={(props) => <DebtorDetail {...props} loggedInStatus={this.state.loggedInStatus}/>}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

{
  /* <Route exact path="/debtor" component={Deptor} />
              <Route exact path="/payment" component={Payments} /> */
}
