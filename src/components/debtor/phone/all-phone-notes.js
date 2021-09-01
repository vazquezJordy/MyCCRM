import React from "react";

const AllPhoneNotes = (props) => {
    const {id, parent_id, phoneNote} = props.phoneRecords;

    return(
        <div className='display-activity' key={id}>{phoneNote}</div>
    )
};

export default AllPhoneNotes