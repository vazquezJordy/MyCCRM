import React, { Component } from "react";
import axios from "axios";
import DebtorCard from "./debtor-card";

export default class DebtorSegment extends Component {
  constructor(props) {
    super(props);

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
        this.setState({
          debtor: response.data,
        });
      })

      .catch((error) => {
        console.log(error);
      });
  }

  componentWillMount() {
    this.getDebtors();
  }

  // debtorData() {
  //   return this.state.debtor.map((debtor) => {
  //     return <DebtorCard key={debtor.id} debtor={debtor} />;
  //   });
  // }

  render() {
    const debtorRecords = this.state.debtor.map((debtorRecord) => {
      return (
        
        <div className="debtor-segment_card" key={debtorRecord.id}>
          <DebtorCard debtorRecord={debtorRecord}/>
          </div>
      );
    });

    return (
      <div className="debtor-segment">
          <div className="debtor-segment__header">No Contact</div>
          
            <div className="debtor-segment__column">{debtorRecords}</div>
        
      </div>
    );
  }
}
