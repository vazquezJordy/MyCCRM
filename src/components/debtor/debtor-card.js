import React, { Component } from "react";
import {Link} from "react-router-dom";

const DebtorCard = (props) => {
  const { firstName, lastName, id, amountOwed,  } = props.debtorRecord;
  // console.log(props.debtorRecord)
  // const debtorRecord = [];
  // debtorRecord.concat(props.debtorRecord.id)
  // debtorRecord.forEach(debtor => {
  //  return <div >{debtor}</div>
  // });

  function CommaFormatted(amount) {
    var delimiter = ","; // replace comma if desired
    var a = amount.split('.',2)
    var d = a[1];
    var i = parseInt(a[0]);
    if(isNaN(i)) { return ''; }
    var minus = '';
    if(i < 0) { minus = '-'; }
    i = Math.abs(i);
    var n = new String(i);
    var a = [];
    while(n.length > 3) {
      var nn = n.substr(n.length-3);
      a.unshift(nn);
      n = n.substr(0,n.length-3);
    }
    if(n.length > 0) { a.unshift(n); }
    n = a.join(delimiter);
    if(d.length < 1) { amount = n; }
    else { amount = n + '.' + d; }
    amount = minus + amount;
    return amount;
  }
  

  // amountOwed.forEach(amount => {
  //   amount.toLocalString();
  // });
  return (
   
    <div key={id} className="debtor-segment__column debtor-card" >
      <div className="debtor-card__header">
        <Link to={`/debtor/${id}`}>
        {firstName} {lastName}
        </Link>
      </div>
      <div  className="debtor-card__amountOwed">
      ${amountOwed}
      </div>
    </div>
  );
};

export default DebtorCard;
// const debtorRecords = this.state.debtor.map((debtorRecord) => {
//   return (

//     <div className="debtor-segment_card" key={debtorRecord.id}>
//       <DebtorCard debtorRecord={debtorRecord}/>
//       </div>
//   );
// });
