import React, { Component } from "react";
import axios from "axios";
import ReactModal from "react-modal";

export default class PhoneNoteModal extends Component {
  constructor(probs) {
    super(probs);

    this.state = {
      phoneNote: "",
      currentID: this.props.debtorID,
    };

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
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleModalClose(event) {
    this.props.handlePhoneModalClose();
  }

  handleSubmit(event) {
    axios({
      mode: "no-cors",
      method: "post",
      url: `https://mycrmdbpython.herokuapp.com/debtor/${this.state.currentID}/phone`,
      data: {
        phoneNote: this.state.phoneNote
      }
    })
    .then((response) => {
        console.log(response);
        
      })
      .catch((error) => {
        console.log(error);
      });
      event.preventDefault();
      this.setState({phoneNote: ''});
      this.handleModalClose();
  }
  render() {
    return (
      <div className="phone-note-modal">
        <ReactModal
          style={this.customStyles}
          onRequestClose={() => {
            this.props.handlePhoneModalClose();
          }}
          isOpen={this.props.phoneModalIsOpen}
        >
          <div className="phone-note-modal__wrapper">
            <div className="phone-note-modal__wrapper-header">Phone Note</div>
            <form onSubmit={this.handleSubmit}>
              <textarea
                id="textInput"
                className="textareanote"
                rows="20"
                cols="40"
                type="text"
                name="phoneNote"
                value={this.state.phoneNote}
                onChange={this.handleChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </ReactModal>
      </div>
    );
  }
}
