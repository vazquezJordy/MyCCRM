import React, { Component } from "react";
import DebtorSegment from "./debtorSegment";

class Deptor extends Component {
  constructor(props) {
    super(props);

    this.state = {
        loggedInStatus: this.props.loggedInStatus
    }
  }

  //   handleSuccessfulAuth(data) {
  //     this.props.handleLogin(data);
  //     this.props.history.push("/debtor");
  //   }
  //   handleLogoutClick() {}

  render() {
    console.log("This comes from Debtor" + this.props.loggedInStatus);
    return (
      <div className="debtor-wrapper">
        <DebtorSegment  loggedInStatus={this.props.loggedInStatus}/>
      </div>
    );
  }
}

export default Deptor;
