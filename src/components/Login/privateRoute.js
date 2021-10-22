import { Redirect, Route, Switch, } from "react-router-dom";
import React from 'react';
import Cookies from "js-cookie";


function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === "LOGGED_IN"
        ? <Component {...props} />
        : <Redirect to='auth' />}
    />
  )
}

export default PrivateRoute;

// render={(props) => (
//     <Deptor
//       {...props}
//       loggedInStatus={this.state.loggedInStatus}
//     />
//   )}
