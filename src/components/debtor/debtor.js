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
    
    return (
        <div className='debtor-wrapper'> 
        <DebtorSegment/>
        </div>
    );
}
}

export default Deptor;