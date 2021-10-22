import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavigationContainer from "./navigation/navigation-container";
import axios from "axios";

import Dashboard from "./Dashboard/dashboard";
import Deptor from "./debtor/debtor";
import Home from "./Dashboard/home";
import Payments from "./payments/payments";
import DebtorDetail from "./debtor/detor-detail";
import Login from "./Login/login";
import Cookies from "js-cookie";
import Auth from "./Login/auth";
import PrivateRoute from "./Login/privateRoute";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.authorizedPages = this.authorizedPages.bind(this)
    // this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    // this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
    this.handleUnotherizedPage = this.handleUnotherizedPage.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN",
    });
  }

  checkLoginStatus() {
    const token = Cookies.get("token");
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
        console.log(
          "this is your response logged " + response.data.logged_in_as
        );
        const loggedIn = response.data.logged_in_as;
        console.log("This is the status for loggedIn " + loggedIn);
        const loggedInStatus = this.state.loggedInStatus;
        console.log(
          "This is the current status of loggedInStatus " + loggedInStatus
        );
        if (loggedIn === "test" ){
          this.setState({
            loggedInStatus: "LOGGED_IN"
          })
        } else if (loggedIn === "test" && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN",
          });
        } else if (loggedIn != "test" && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          })
        } 
        // else if (response.data.status != 200) {
        //   <Redirect to='auth' />
        // }
      })
      .catch((error) => {
        this.setState({loggedInStatus: "NOT_LOGGED_IN"})
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  // componentWillMount() {
  //   this.unauthorizedPages();
  // }

  handleUnotherizedPage() {
    return [
      <Route
        path="/auth"
        render={(props) => (
          <Login
            {...props}
            handleSuccessfulLogin={this.handleSuccessfulLogin}
          />
        )}
      />,
    ];
  }

  authorizedPages() {
    return [
      <Route
        path="/debtor"
        render={(props) => (
          <Deptor
            {...props}
            loggedInStatus={this.state.loggedInStatus}
            handleSuccessfulLogin={this.handleSuccessfulLogin}
          />
        )}
      />,
    ];
  }

  render() {
    // const isLoggedIn = this.state.loggedInStatus;
    // console.log(isLoggedIn + " This is the current state");
    return (
      <div className="app">
        <Router>
          <div>
            <NavigationContainer loggedInStatus={this.state.loggedInStatus} />

            <Switch>
              <Route exact path="/" component={Home} {...this.props} />
              <Route
                path="/auth"
                render={(props) => (
                  <Auth
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                  />
                )}
              />

              {console.log(
                "This is our status for inside the funciton" +
                  this.state.loggedInStatus
              )}

              {this.state.loggedInStatus === "LOGGED_IN"
                ? <Route
                path="/debtor"
                render={(props) => (
                  <Deptor
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                  />
                )}
              />
                : null}

                {this.state.loggedInStatus === "NOT_LOGGED_IN" ? this.handleUnotherizedPage() : null}

              
              ,
              {/* <PrivateRoute
                authed={this.state.loggedInStatus}
                exact={true}
                path="/debtor"
                component={Deptor}
              /> */}
              <Route
                path="/debtor/:slug"
                render={(props) => (
                  <DebtorDetail
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
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
