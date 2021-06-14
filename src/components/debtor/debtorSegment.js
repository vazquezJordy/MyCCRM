import React, { Component } from "react";
import axios from "axios";
import DebtorCard from "./debtor-card";

export default class DebtorSegment extends Component {
  constructor() {
    super();

    this.state = {
      debtor: [],
    };
    this.getDebtors = this.getDebtors.bind(this);
  }

  getDebtors() {
    axios({
      mode: "no-cors",
      method: "get",
      url: "http://localhost:5000/debtors",
    })
      .then((response) => {
        console.log(response.data);
        this.setState({
            debtor: this.state.debtor.concat(response.data)
        })
        console.log(this.state.debtor)
      })
      
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillMount() {
      this.getDebtors();
  }

  render() {
    return (
      <div className="debtor-segment">
        <div className="debtor-segment__headers">
          <div className="debtor-segment__headers__header">No contact</div>
          <div className="debtor-segment__headers__header">
            First Contact Attemt
          </div>
          <div className="debtor-segment__headers__header">
            First Contact Attemt
          </div>
          <div className="debtor-segment__headers__header">
            First Contact Attemt
          </div>
          <div className="debtor-segment__headers__header">
            Call back scheduled
          </div>
          <div className="debtor-segment__headers__header">Sent to legal</div>
          <div className="debtor-segment__headers__header">
            Cease and disist
          </div>
        </div>
        <div className="debtor-segment__columns">
          <div className="debtor-segment__columns__column">
            <DebtorCard firstName={this.state.debtor.firstName}/>
          </div>
          <div className="debtor-segment__columns__column">
            <DebtorCard/>
          </div>
          <div className="debtor-segment__columns__column">
            <DebtorCard/>
          </div>
          <div className="debtor-segment__columns__column">
            <DebtorCard/>
          </div>
          <div className="debtor-segment__columns__column">
            <DebtorCard/>
          </div>
          <div className="debtor-segment__columns__column">
            <DebtorCard/>
          </div>
          <div className="debtor-segment__columns__column">
            <DebtorCard/>
          </div>
        </div>
      </div>
    );
  }
}
