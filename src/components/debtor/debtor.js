import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import DebtorSegment from "./debtorSegment";

class Deptor extends Component {
  constructor(props) {
    super(props);

    this.state = {
        loggedInStatus: this.props.loggedInStatus
    }
  }

  render() {
    console.log("This comes from Debtor" + this.props.loggedInStatus);
    return (
      (this.props.loggedInStatus === "LOGGED_IN" ?     <div className="debtor-wrapper">
        <DebtorSegment  loggedInStatus={this.props.loggedInStatus}/>
      </div> : <Redirect to='/auth'/>)
    )
  }
}

export default Deptor;