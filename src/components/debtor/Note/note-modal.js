import React, { Component } from "react";
import ReactModal from "react-modal";
import axios from 'axios';

export default class NoteModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
        note: '',
        currentID: this.props.debtorID,
    }

    this.customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%",
        width: "350px",
        height: "400px",
        backgroundColor: "White",
      },
      overlay: {
        backgroundColor: "rgba(1, 2, 3, 0.75)",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event){
    this.setState({
        [event.target.name]:event.target.value 
    })
    console.log(event.target.value )
    console.log(this.state.currentID, 'This is the id');
  }

  handleSubmit(event){
      axios({
        mode: "no-cors",
        method: "post",
        url: `http://localhost:5000/debtor/${this.state.currentID}/note`,
        data: {
            note : this.state.note
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="note-modal">
        <ReactModal
          style={this.customStyles}
          onRequestClose={() => {
            this.props.handleModalClose();
          }}
          isOpen={this.props.noteModalIsOpen}
        >
          <div className="note">
            <div className="note-header">Note</div>
            <form onSubmit={(this.handleSubmit)}>
                <textarea 
                className="textareanote"
                rows='20'
                cols='40'
                type="text"
                name="note"
                value={this.state.note}
                onChange={this.handleChange}
                />
                <button >Submit</button>
            </form>
          </div>
        </ReactModal>
      </div>
    );
  }
}
