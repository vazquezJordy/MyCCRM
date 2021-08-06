import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationContainer from "./navigation/navigation-container";

import Dashboard from "./Dashboard/dashboard"
import Deptor from "./debtor/debtor";
import Payments from "./payments/payments";
import DebtorDetail from "./debtor/detor-detail";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavigationContainer />
          <Switch>

            <Route exact path = "/" component={Dashboard} />
            <Route exact path = "/debtor" component={Deptor} />
            <Route exact path = "/payment" component={Payments} />
            <Route
                path="/debtor/:slug"
                render={(props) => (
                  <DebtorDetail
                    {...props}
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
