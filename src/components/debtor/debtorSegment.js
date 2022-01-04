import React, { Component } from "react";
import axios from "axios";
import DebtorCard from "./debtor-card";
import { Redirect, Route } from "react-router";
import Login from "../Login/login";

export default class DebtorSegment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      debtor: [],
      debtorId: "",
    };
    this.getDebtors = this.getDebtors.bind(this);
  }

  getDebtors() {
    axios({
      mode: "no-cors",
      method: "get",
      url: "https://mycrmdbpython.herokuapp.com/debtors",
    })
      .then((response) => {
        this.setState({
          debtor: this.state.debtor.concat(response.data),
          debtors: response.data,
          status: response.data.status
        });
      })

      .catch((error) => {
        console.log(error);
      });
  }

  componentWillMount() {
    this.getDebtors();
    
  }

  render() {
   
    const noContactRecords = this.state.debtor.map((debtorRecord) => {
      if (debtorRecord.status === "No Contact") {
      return <DebtorCard key={debtorRecord.id} debtorRecord={debtorRecord} />;
      }
    });
    const firstContact = this.state.debtor.map((debtorRecord) => {
      if (debtorRecord.status === "1st Contact") {
      return <DebtorCard key={debtorRecord.id} debtorRecord={debtorRecord} />;
      }
    })
    const secondContact = this.state.debtor.map((debtorRecord) => {
      if (debtorRecord.status === "2nd Contact") {
      return <DebtorCard key={debtorRecord.id} debtorRecord={debtorRecord} />;
      }
    })
    const thirdContact = this.state.debtor.map((debtorRecord) => {
      if (debtorRecord.status === "3rd Contact") {
      return <DebtorCard key={debtorRecord.id} debtorRecord={debtorRecord} />;
      }
    })
    const doNotCall = this.state.debtor.map((debtorRecord) => {
      if (debtorRecord.status === "Do not call") {
      return <DebtorCard key={debtorRecord.id} debtorRecord={debtorRecord} />;
      }
    })
    const preLegal = this.state.debtor.map((debtorRecord) => {
      if (debtorRecord.status === "Pre-Legal") {
      return <DebtorCard key={debtorRecord.id} debtorRecord={debtorRecord} />;
      }
    })
    const legal = this.state.debtor.map((debtorRecord) => {
      if (debtorRecord.status === "Legal") {
      return <DebtorCard key={debtorRecord.id} debtorRecord={debtorRecord} />;
      }
    })

    return (
      <div className="debtor-segment-wrapper">
        <div className="debtor-segment">
          <div className="debtor-segment__header">No Contact</div>
          <div className="debtor-segment__column">{noContactRecords}</div>
        </div>

        <div className="debtor-segment">
          <div className="debtor-segment__header">1st Contact</div>
          <div className="debtor-segment__column">{firstContact}</div>
        </div>

        <div className="debtor-segment">
          <div className="debtor-segment__header">2nd Contact</div>
          <div className="debtor-segment__column">{secondContact}</div>
        </div>

        <div className="debtor-segment">
          <div className="debtor-segment__header">3rd Contact</div>
          <div className="debtor-segment__column">{thirdContact}</div>
        </div>

        <div className="debtor-segment">
          <div className="debtor-segment__header">Do not call</div>
          <div className="debtor-segment__column">{doNotCall}</div>
        </div>

        <div className="debtor-segment">
          <div className="debtor-segment__header">Pre-legal</div>
          <div className="debtor-segment__column">{preLegal}</div>
        </div>

        <div className="debtor-segment">
          <div className="debtor-segment__header">Legal</div>
          <div className="debtor-segment__column">{legal}</div>
        </div>
     </div>
    );
  }
}
