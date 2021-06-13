import React, { Component } from "react";
import ReactModal from "react-modal";

import AddDebtorForm from "./add-debtor-form";

ReactModal.setAppElement(".app-wrapper");

export default class AddDebtorModal extends Component {
  constructor(props) {
    super(props);

    this.customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%",
        width: "800px",
        height: "500px",
        backgroundColor: "#1A1A1A",
      },
      overlay: {
        backgroundColor: "rgba(1, 1, 1, 0.75)",
      },
    };
  }

  render() {
    return (
      <div>
        <ReactModal
          style={this.customStyles}
          
          onRequestClose={() => {
            this.props.handleModalClose();
          }}

          isOpen={this.props.modalIsOpen}
        >
          <AddDebtorForm />
          <div className="modal-btns">
            <button onClick={this.props.handleModalClose}>Close</button>
          </div>
        </ReactModal>
      </div>
    );
  }
}
