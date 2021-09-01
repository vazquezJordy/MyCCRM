import React from 'react';

const AllPayments = (props) => {
    const {id, parent_id, dateDue, paymentAmount} = props.paymentRecords

    return(
        <div className='display-activity' key={id}>Due Date:{dateDue} Payment:{paymentAmount}</div>
    )
}

export default AllPayments;