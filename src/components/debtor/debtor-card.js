import React, { Component } from "react";
import {Link} from "react-router-dom";

const DebtorCard = (props) => {
  const { firstName, lastName, id, amountOwed,  } = props.debtorRecord;
  return (
   
    <div className="debtor-segment__column debtor-card" >
      <div className="debtor-card__header" key={id}>
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

