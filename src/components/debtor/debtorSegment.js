import React, { Component } from "react";
import axios from "axios";
import DebtorCard from "./debtor-card";

export default class DebtorSegment extends Component {
  constructor() {
    super();

    this.state = {
      debtor: [],
      debtorId: '',
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
          debtor: this.state.debtor.concat(response.data),
          debtorId: this.state.debtor.concat(response.data.id)
          
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
    const debtorRecords = this.state.debtor.map(debtorRecord => {
      console.log(debtorRecord.id)
      return <DebtorCard key={debtorRecord.id} debtorRecord={debtorRecord}/>
    });

    return (
      <div className="debtor-segment">
          <div className="debtor-segment__header">No Contact</div>
          
            <div className="debtor-segment__column">{debtorRecords}</div>
        
      </div>
    );
  }
}
