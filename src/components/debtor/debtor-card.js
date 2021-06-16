import React, { Component } from "react";

export default class DebtorCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.debtorData,
    };
  }
  
  render() {
    
    const {firstName, LastName} = this.state.data;
    const {debtorData} = this.state;
    console.log(debtorData)
    return ( 
    <div>{debtorData} {firstName}</div>
    )
  }
}
 // const debtorRecords = this.state.debtor.map((debtorRecord) => {
    //   return (
        
    //     <div className="debtor-segment_card" key={debtorRecord.id}>
    //       <DebtorCard debtorRecord={debtorRecord}/>
    //       </div>
    //   );
    // });
