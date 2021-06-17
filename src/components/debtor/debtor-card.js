import React, { Component } from "react";

class DebtorCard extends Component {
  render() {
        const {firstName, lastName} = this.props.debtorRecord;
    return ( 
    <div>{firstName}{lastName}</div>
    )
  }
}

export default DebtorCard
 // const debtorRecords = this.state.debtor.map((debtorRecord) => {
    //   return (
        
    //     <div className="debtor-segment_card" key={debtorRecord.id}>
    //       <DebtorCard debtorRecord={debtorRecord}/>
    //       </div>
    //   );
    // });
