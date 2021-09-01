import React, { Component } from "react";

const AllNotes = (props) => {
    const {id, note, parent_id} = props.noteRecord;

    return (
        <div className='display-activity' key={id}>{note}</div>
    );
}

export default AllNotes;